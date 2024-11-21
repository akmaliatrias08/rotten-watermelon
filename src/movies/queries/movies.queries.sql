/* @name createMovie */
INSERT INTO movies(movie_type_id, title, synopsis, distributor, rating, production_co, original_lang, release_date_theather, release_date_streaming, runtime, soundmix) VALUES (:movie_type_id, :title, :synopsis, :distributor, :rating, :production_co, :original_lang, :release_date_theather, :release_date_streaming, :runtime, :soundmix) RETURNING *;

/* 
    @name createMoviePoster 
    @param moviePosters -> ((movie_id, poster)...)
*/
INSERT INTO movies_posters(movie_id, poster) VALUES :moviePosters RETURNING *;

/* 
    @name createMovieGenre 
    @param movieGenres -> ((movie_id, genre_id)...)
*/
INSERT INTO movies_genres(movie_id, genre_id) VALUES :movieGenres RETURNING *;

/* 
    @name createMovieCrewPosition 
    @param movieCrewsPositions -> ((movie_id, crew_id, position_id, movie_type_id)...)
*/
INSERT INTO movies_crews_positions(movie_id, crew_id, position_id, movie_type_id) VALUES :movieCrewsPositions RETURNING *;

