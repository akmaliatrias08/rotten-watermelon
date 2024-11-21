import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { createCrew, createCrewPhotos, deleteCrewId, deleteCrewPhotosByCrewId, findAllCrews, findCrewById, findCrewPhotosByCrewId, ICreateCrewPhotosParams, updateCrewById } from './queries/__generated__/crews.queries';
import { ResponseUtil } from 'src/utils/response.util';
import { CreateCrewDTO } from './dto/create-crew.dto';
import { UpdateCrewDTO } from './dto/update-crew.dto';

@Injectable()
export class CrewsService {
    constructor(
        @Inject('PG_CLIENT') private readonly dbClient: any
    ){}

    async getAll(){
        try {
            const roles = await findAllCrews.run(undefined, this.dbClient)
            return ResponseUtil.success(roles)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        try {
            const crew = await findCrewById.run({id: id}, this.dbClient)
            if (crew.length == 0) {
                throw new Error("error record not found");
            }

            const crewPhotos = await findCrewPhotosByCrewId.run({crew_id: id}, this.dbClient)
            if (crewPhotos.length == 0) {
                throw new Error("error record not found");
            }

            return ResponseUtil.success({...crew[0], photos: crewPhotos})
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with id = ${id} in table crews not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async create(createCrewDTO: CreateCrewDTO){
        try {
            await this.dbClient.query('BEGIN')

            //validation date can be empty
            if(createCrewDTO.birthday == ""){
                createCrewDTO.birthday = null
            }

            //create upload crew 
            const crew = await createCrew.run(createCrewDTO, this.dbClient)

            if(crew.length === 0){
                throw new Error('failed to insert crew');
            }

            const crewId = crew[0].id
            
            //create upload photos 
            const photos = createCrewDTO.photos.length > 0 ? await Promise.all(createCrewDTO.photos.map(({photo}) => { return {crew_id: crewId, photo} })) : []
            
            const uploadPhotos = photos.length > 0 ? await createCrewPhotos.run({crewPhotos: photos}, this.dbClient) : []

            await this.dbClient.query('COMMIT')
            return ResponseUtil.success({...crew[0], photos: uploadPhotos}, HttpStatus.CREATED);
        } catch (e) {
            await this.dbClient.query('ROLLBACK')    
            throw new HttpException(ResponseUtil.error(e.message, e.detail), HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }

    async updateById(id: string, updateCrewDTO: UpdateCrewDTO){
        try {
            //validation the id exist 
            await this.getById(id)

            await this.dbClient.query('BEGIN')

            //update crew
            const crew = await updateCrewById.run({id: id, ...updateCrewDTO}, this.dbClient)
            if(crew.length === 0){
                throw new Error('failed to update crew');
            }

            //delete the photos 
            const deletePhotos = await deleteCrewPhotosByCrewId.run({crew_id: id}, this.dbClient)
            if(deletePhotos.length === 0){
                throw new Error('failed to delete crew photos');
            }

            //create again photos 
            const photos = await Promise.all(updateCrewDTO.photos.map(({photo}) => { return {crew_id: id, photo} }))
            const uploadPhotos = await createCrewPhotos.run({crewPhotos: photos}, this.dbClient)
            
            if(uploadPhotos.length === 0){
                throw new Error('failed to insert crew photos');
            }

            await this.dbClient.query('COMMIT')
            return ResponseUtil.success({...crew[0], photos});
        } catch (e) {
            await this.dbClient.query('ROLLBACK')
            throw e
        }
    }

    async deleteById(id: string){
        try {
            await this.getById(id)

            const crew = await deleteCrewId.run({id}, this.dbClient)
            if(crew.length === 0){
                throw new Error('failed to delete crew');
            }

            //delete the photos 
            const deletePhotos = await deleteCrewPhotosByCrewId.run({crew_id: id}, this.dbClient)
            if(deletePhotos.length === 0){
                throw new Error('failed to delete crew photos');
            }

            return ResponseUtil.success(crew[0]);
        } catch (e) {
            throw e
        }
    }
}
