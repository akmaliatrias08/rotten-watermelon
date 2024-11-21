import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { createGenre, deleteGenreById, findAllGenre, findGenreById, updateGenreById } from './queries/__generated__/genres.queries';
import { ResponseUtil } from 'src/utils/response.util';
import { CreateGenreDTO } from './dto/create-genre.dto';
import { UpdateGenreDTO } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
    constructor(@Inject('PG_CLIENT') private readonly dbClient: any){}

    async getAll(){
        try {
            const genres = await findAllGenre.run(undefined, this.dbClient)
            return ResponseUtil.success(genres)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        try {
            const genre = await findGenreById.run({id: id}, this.dbClient)
            
            if (genre.length == 0) {
                throw new Error("error record not found");
            }

            return ResponseUtil.success(genre[0])
        } catch (e) {
            if(e.message === "error record not found"){
                throw new NotFoundException(ResponseUtil.error("record not found", `record with id = ${id} in table movies_types not found`, HttpStatus.NOT_FOUND))  
            }

            throw e
        }
    }

    async create(createGenreDTO: CreateGenreDTO){
        try {
            const genre = await createGenre.run({genre: createGenreDTO.genre}, this.dbClient)
            return ResponseUtil.success(genre[0], HttpStatus.CREATED);
        } catch (e) {
            throw e
        }
    }

    async updateById(id: string, updateGenreDTO: UpdateGenreDTO){
        try {
            //validation the id is exist
            await this.getById(id)

            const updatedGenre = await updateGenreById.run({id, genre: updateGenreDTO.genre}, this.dbClient)
            return ResponseUtil.success(updatedGenre[0])
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: string){
        try {
            //validation the id is exist
            await this.getById(id)

            const deleteGenre = await deleteGenreById.run({id}, this.dbClient)
            return ResponseUtil.success(deleteGenre[0])
        } catch (e) {
            throw e
        }
       
    }



}
