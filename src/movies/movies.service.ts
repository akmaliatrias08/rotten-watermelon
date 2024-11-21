import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MoviesTypesService } from 'src/movies-types/movies-types.service';
import { createMovie, createMovieCrewPosition, createMovieGenre, createMoviePoster } from './queries/__generated__/movies.queries';
import { ResponseUtil } from 'src/utils/response.util';

@Injectable()
export class MoviesService {
    constructor(
        @Inject('PG_CLIENT') private readonly dbClient: any,
        private readonly moviesTypesService: MoviesTypesService
    ){}

    async create(createMovieDTO: CreateMovieDTO){
        try {
            //vaidation movie type 
            await this.moviesTypesService.getById(createMovieDTO.movie_type_id)

            await this.dbClient.query('BEGIN')

            //create movie
            const movie = await createMovie.run(createMovieDTO, this.dbClient)
            if(movie.length == 0){
                throw new Error("failed to insert movie")
            }

            const movieId= movie[0].id
            const movieTypeId= movie[0].movie_type_id


            //create movies genres
            const genres = await Promise.all(createMovieDTO.moviesGenres.map(({genre_id}) => {return {movie_id: movieId, genre_id}}))
            const movieGenres = await createMovieGenre.run({movieGenres: genres}, this.dbClient)

            if(createMovieDTO.moviesGenres.length > 0 && movieGenres.length == 0){
                throw new Error("failed to insert movie genre")
            }

            //create movies posters
            const posters = await Promise.all(createMovieDTO.moviesPostres.map(({poster}) => {return {movie_id: movieId, poster}}))
            const moviePosters = await createMoviePoster.run({moviePosters: posters}, this.dbClient)
            console.log(moviePosters, "posters")

            if(createMovieDTO.moviesPostres.length > 0  && moviePosters.length == 0){
                throw new Error("failed to insert movie poster")
            }

            //create movies crews positions
            const crewsPositions = await Promise.all(createMovieDTO.moviesCrewPosition.map(({crew_id, position_id}) => {return {movie_id: movieId, crew_id, position_id, movie_type_id: movieTypeId}}))
            const movieCrews = await createMovieCrewPosition.run({movieCrewsPositions: crewsPositions}, this.dbClient)

            if(createMovieDTO.moviesCrewPosition.length > 0 && movieCrews.length == 0){
                throw new Error("failed to insert movie poster")
            }

            await this.dbClient.query('COMMIT')
            return ResponseUtil.success({
                ...movie[0], movie_genres: movieGenres, 
                movie_posters: moviePosters, 
                moview_crews: movieCrews
            })

        } catch (e) {
            await this.dbClient.query('ROLLBACK')  
            console.log(e)
            throw e
        }       
    }
}
