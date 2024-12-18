import { Body, Controller, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor( private readonly moviesService: MoviesService){}

    @Post()
    async create(@Body() createMovieDTO: CreateMovieDTO){
        return this.moviesService.create(createMovieDTO)
    }
}
