import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { createMovieType, deleteMovieTypeById, findAllMovieType, findMovieTypeById, updateMovieTypeById } from './queries/__generated__/movie-types.queries';
import { ResponseUtil } from 'src/utils/response.util';
import { CreateMovieTypeDTO } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDTO } from './dto/update-movie-type.dto';

@Injectable()
export class MoviesTypesService {
    constructor(@Inject('PG_CLIENT') private readonly dbClient: any){}

    async getAll(){
        try {
            const moviesTypes = await findAllMovieType.run(undefined, this.dbClient)
            return ResponseUtil.success(moviesTypes)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        try {
            const movieType = await findMovieTypeById.run({id: id}, this.dbClient)
            
            if (movieType.length == 0) {
                throw new Error("error record not found");
            }

            return ResponseUtil.success(movieType[0])
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with id = ${id} in table movies_types not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async create(createMovieTypeDTO: CreateMovieTypeDTO){
        try {
            const movieType = await createMovieType.run({type: createMovieTypeDTO.type}, this.dbClient)
            return ResponseUtil.success(movieType[0], HttpStatus.CREATED);
        } catch (e) {
            throw e
        }
    }

    async updateById(id: string, updateMovieTypeDTO: UpdateMovieTypeDTO){
        try {
            //validation the id is exist
            await this.getById(id)

            const updatedMovieType = await updateMovieTypeById.run({id, type: updateMovieTypeDTO.type}, this.dbClient)
            return ResponseUtil.success(updatedMovieType[0])
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: string){
        try {
            //validation the id is exist
            await this.getById(id)

            const deleteMovieType = await deleteMovieTypeById.run({id}, this.dbClient)
            return ResponseUtil.success(deleteMovieType[0])
        } catch (e) {
            throw e
        }
       
    }
}
