/** Types generated for queries found in "src/movies/queries/movies.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'CreateMovie' parameters type */
export interface ICreateMovieParams {
  distributor?: string | null | void;
  movie_type_id?: string | null | void;
  original_lang?: string | null | void;
  production_co?: string | null | void;
  rating?: string | null | void;
  release_date_streaming?: DateOrString | null | void;
  release_date_theather?: DateOrString | null | void;
  runtime?: DateOrString | null | void;
  soundmix?: string | null | void;
  synopsis?: string | null | void;
  title?: string | null | void;
}

/** 'CreateMovie' return type */
export interface ICreateMovieResult {
  created_at: Date | null;
  deleted_at: Date | null;
  distributor: string | null;
  id: string;
  movie_type_id: string;
  original_lang: string | null;
  production_co: string | null;
  rating: string | null;
  release_date_streaming: Date | null;
  release_date_theather: Date | null;
  runtime: Date | null;
  soundmix: string | null;
  synopsis: string | null;
  title: string | null;
  updated_at: Date | null;
}

/** 'CreateMovie' query type */
export interface ICreateMovieQuery {
  params: ICreateMovieParams;
  result: ICreateMovieResult;
}

const createMovieIR: any = {"usedParamSet":{"movie_type_id":true,"title":true,"synopsis":true,"distributor":true,"rating":true,"production_co":true,"original_lang":true,"release_date_theather":true,"release_date_streaming":true,"runtime":true,"soundmix":true},"params":[{"name":"movie_type_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":176,"b":189}]},{"name":"title","required":false,"transform":{"type":"scalar"},"locs":[{"a":192,"b":197}]},{"name":"synopsis","required":false,"transform":{"type":"scalar"},"locs":[{"a":200,"b":208}]},{"name":"distributor","required":false,"transform":{"type":"scalar"},"locs":[{"a":211,"b":222}]},{"name":"rating","required":false,"transform":{"type":"scalar"},"locs":[{"a":225,"b":231}]},{"name":"production_co","required":false,"transform":{"type":"scalar"},"locs":[{"a":234,"b":247}]},{"name":"original_lang","required":false,"transform":{"type":"scalar"},"locs":[{"a":250,"b":263}]},{"name":"release_date_theather","required":false,"transform":{"type":"scalar"},"locs":[{"a":266,"b":287}]},{"name":"release_date_streaming","required":false,"transform":{"type":"scalar"},"locs":[{"a":290,"b":312}]},{"name":"runtime","required":false,"transform":{"type":"scalar"},"locs":[{"a":315,"b":322}]},{"name":"soundmix","required":false,"transform":{"type":"scalar"},"locs":[{"a":325,"b":333}]}],"statement":"INSERT INTO movies(movie_type_id, title, synopsis, distributor, rating, production_co, original_lang, release_date_theather, release_date_streaming, runtime, soundmix) VALUES (:movie_type_id, :title, :synopsis, :distributor, :rating, :production_co, :original_lang, :release_date_theather, :release_date_streaming, :runtime, :soundmix) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO movies(movie_type_id, title, synopsis, distributor, rating, production_co, original_lang, release_date_theather, release_date_streaming, runtime, soundmix) VALUES (:movie_type_id, :title, :synopsis, :distributor, :rating, :production_co, :original_lang, :release_date_theather, :release_date_streaming, :runtime, :soundmix) RETURNING *
 * ```
 */
export const createMovie = new PreparedQuery<ICreateMovieParams,ICreateMovieResult>(createMovieIR);


/** 'CreateMoviePoster' parameters type */
export interface ICreateMoviePosterParams {
  moviePosters: readonly ({
    movie_id: string | null | void,
    poster: string | null | void
  })[];
}

/** 'CreateMoviePoster' return type */
export interface ICreateMoviePosterResult {
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  movie_id: string;
  poster: string | null;
  updated_at: Date | null;
}

/** 'CreateMoviePoster' query type */
export interface ICreateMoviePosterQuery {
  params: ICreateMoviePosterParams;
  result: ICreateMoviePosterResult;
}

const createMoviePosterIR: any = {"usedParamSet":{"moviePosters":true},"params":[{"name":"moviePosters","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"movie_id","required":false},{"name":"poster","required":false}]},"locs":[{"a":52,"b":64}]}],"statement":"INSERT INTO movies_posters(movie_id, poster) VALUES :moviePosters RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO movies_posters(movie_id, poster) VALUES :moviePosters RETURNING *
 * ```
 */
export const createMoviePoster = new PreparedQuery<ICreateMoviePosterParams,ICreateMoviePosterResult>(createMoviePosterIR);


/** 'CreateMovieGenre' parameters type */
export interface ICreateMovieGenreParams {
  movieGenres: readonly ({
    movie_id: string | null | void,
    genre_id: string | null | void
  })[];
}

/** 'CreateMovieGenre' return type */
export interface ICreateMovieGenreResult {
  created_at: Date | null;
  deleted_at: Date | null;
  genre_id: string;
  id: string;
  movie_id: string;
  updated_at: Date | null;
}

/** 'CreateMovieGenre' query type */
export interface ICreateMovieGenreQuery {
  params: ICreateMovieGenreParams;
  result: ICreateMovieGenreResult;
}

const createMovieGenreIR: any = {"usedParamSet":{"movieGenres":true},"params":[{"name":"movieGenres","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"movie_id","required":false},{"name":"genre_id","required":false}]},"locs":[{"a":53,"b":64}]}],"statement":"INSERT INTO movies_genres(movie_id, genre_id) VALUES :movieGenres RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO movies_genres(movie_id, genre_id) VALUES :movieGenres RETURNING *
 * ```
 */
export const createMovieGenre = new PreparedQuery<ICreateMovieGenreParams,ICreateMovieGenreResult>(createMovieGenreIR);


/** 'CreateMovieCrewPosition' parameters type */
export interface ICreateMovieCrewPositionParams {
  movieCrewsPositions: readonly ({
    movie_id: string | null | void,
    crew_id: string | null | void,
    position_id: string | null | void,
    movie_type_id: string | null | void
  })[];
}

/** 'CreateMovieCrewPosition' return type */
export interface ICreateMovieCrewPositionResult {
  add_txt: string | null;
  created_at: Date | null;
  crew_id: string;
  deleted_at: Date | null;
  id: string;
  movie_id: string;
  movie_type_id: string;
  position_id: string;
  updated_at: Date | null;
}

/** 'CreateMovieCrewPosition' query type */
export interface ICreateMovieCrewPositionQuery {
  params: ICreateMovieCrewPositionParams;
  result: ICreateMovieCrewPositionResult;
}

const createMovieCrewPositionIR: any = {"usedParamSet":{"movieCrewsPositions":true},"params":[{"name":"movieCrewsPositions","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"movie_id","required":false},{"name":"crew_id","required":false},{"name":"position_id","required":false},{"name":"movie_type_id","required":false}]},"locs":[{"a":89,"b":108}]}],"statement":"INSERT INTO movies_crews_positions(movie_id, crew_id, position_id, movie_type_id) VALUES :movieCrewsPositions RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO movies_crews_positions(movie_id, crew_id, position_id, movie_type_id) VALUES :movieCrewsPositions RETURNING *
 * ```
 */
export const createMovieCrewPosition = new PreparedQuery<ICreateMovieCrewPositionParams,ICreateMovieCrewPositionResult>(createMovieCrewPositionIR);


