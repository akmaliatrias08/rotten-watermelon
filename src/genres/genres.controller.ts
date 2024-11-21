import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDTO } from './dto/create-genre.dto';
import { UpdateGenreDTO } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
    constructor(
        private readonly genresService: GenresService
    ) {}

    @Get()
    getAll(){
        return this.genresService.getAll()
    }

    @Post()
    create(@Body() createMovieTypeDTO: CreateGenreDTO) {
      return this.genresService.create(createMovieTypeDTO)
    }
    
    @Get('/:id')
    getOneById(@Param('id', ParseUUIDPipe) id: string){
        return this.genresService.getById(id)
    }

      
    @Put('/:id')
    updateById(@Param('id', ParseUUIDPipe) id: string,@Body() updategenreDTO: UpdateGenreDTO ){
        return this.genresService.updateById(id, updategenreDTO)
    }
    
    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.genresService.deleteById(id)
    }

}
