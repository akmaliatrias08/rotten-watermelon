import { IsNotEmpty } from "class-validator"

class MoviesGenresDTO {
    @IsNotEmpty()
    genre_id: string
}

class MoviesPostersDTO{
    @IsNotEmpty()
    poster: string
}

class MovieCrewsPositions{
    @IsNotEmpty()
    crew_id: string

    @IsNotEmpty()
    position_id: string
}

export class CreateMovieDTO{
    @IsNotEmpty()
    movie_type_id: string
    
    @IsNotEmpty()
    title: string
    
    @IsNotEmpty()
    synopsis: string
    
    @IsNotEmpty()
    distributor: string
    
    rating: string
    
    production_co: string
    
    original_lang: string
    
    release_date_theather: string
    
    release_date_streaming: string
    
    runtime: string
    
    soundmix: string

    moviesGenres: MoviesGenresDTO[]

    moviesPostres: MoviesPostersDTO[]

    moviesCrewPosition: MovieCrewsPositions[]
}