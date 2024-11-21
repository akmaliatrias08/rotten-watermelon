import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ResponseUtil } from 'src/utils/response.util';
import { createCrewPosition, deleteCrewPositionById, findAllCrewPosition, findCrewPositionById, updateCrewPositionById } from './queries/__generated__/crews-positions.queries';
import { CreateCrewPositionDTO } from './dto/create-crew-position.dto';
import { UpdateCrewPositionDTO } from './dto/update-crew-position.sto';

@Injectable()
export class CrewsPositionsService {
    constructor(@Inject('PG_CLIENT') private readonly dbClient: any){}

    async getAll(){
        try {
            const crewPositions = await findAllCrewPosition.run(undefined, this.dbClient)
            return ResponseUtil.success(crewPositions)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        try {
            const crewPosition = await findCrewPositionById.run({id: id}, this.dbClient)
            
            if (crewPosition.length == 0) {
                throw new Error("error record not found");
            }

            return ResponseUtil.success(crewPosition[0])
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with id = ${id} in table movies_types not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async create(createCrewPositionDTO: CreateCrewPositionDTO){
        try {
            const crewPosition = await createCrewPosition.run({position: createCrewPositionDTO.position}, this.dbClient)
            return ResponseUtil.success(crewPosition[0], HttpStatus.CREATED);
        } catch (e) {
            throw e
        }
    }

    async updateById(id: string, updateCrewPositionDTO: UpdateCrewPositionDTO){
        try {
            //validation the id is exist
            await this.getById(id)

            const updatedCrewPosition = await updateCrewPositionById.run({id, position: updateCrewPositionDTO.position}, this.dbClient)
            return ResponseUtil.success(updatedCrewPosition[0])
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: string){
        try {
            //validation the id is exist
            await this.getById(id)

            const deleteCrewPosition = await deleteCrewPositionById.run({id}, this.dbClient)
            return ResponseUtil.success(deleteCrewPosition[0])
        } catch (e) {
            throw e
        }
       
    }
}
