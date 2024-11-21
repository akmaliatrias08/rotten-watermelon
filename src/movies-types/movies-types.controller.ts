import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { MoviesTypesService } from './movies-types.service';
import { CreateMovieTypeDTO } from './dto/create-movie-type.dto';
import { UpdateMovieTypeDTO } from './dto/update-movie-type.dto';

@Controller('movies-types')
export class MoviesTypesController {
    constructor(
        private readonly moviesTypesService: MoviesTypesService
    ) {}
    
    @Get()
    getAll(){
        return this.moviesTypesService.getAll()
    }

    @Post()
    create(@Body() createMovieTypeDTO: CreateMovieTypeDTO) {
      return this.moviesTypesService.create(createMovieTypeDTO)
    }
    
    @Get('/:id')
    getOneById(@Param('id', ParseUUIDPipe) id: string){
        return this.moviesTypesService.getById(id)
    }

      
    @Put('/:id')
    updateById(@Param('id', ParseUUIDPipe) id: string,@Body() updateMovieTypeDTO: UpdateMovieTypeDTO ){
        return this.moviesTypesService.updateById(id, updateMovieTypeDTO)
    }
    
    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.moviesTypesService.deleteById(id)
    }
}
