/** Types generated for queries found in "src/genres/queries/genres.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllGenre' parameters type */
export type IFindAllGenreParams = void;

/** 'FindAllGenre' return type */
export interface IFindAllGenreResult {
  genre: string | null;
  id: string;
}

/** 'FindAllGenre' query type */
export interface IFindAllGenreQuery {
  params: IFindAllGenreParams;
  result: IFindAllGenreResult;
}

const findAllGenreIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, genre FROM genres WHERE deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, genre FROM genres WHERE deleted_at IS NULL
 * ```
 */
export const findAllGenre = new PreparedQuery<IFindAllGenreParams,IFindAllGenreResult>(findAllGenreIR);


/** 'FindGenreById' parameters type */
export interface IFindGenreByIdParams {
  id?: string | null | void;
}

/** 'FindGenreById' return type */
export interface IFindGenreByIdResult {
  genre: string | null;
  id: string;
}

/** 'FindGenreById' query type */
export interface IFindGenreByIdQuery {
  params: IFindGenreByIdParams;
  result: IFindGenreByIdResult;
}

const findGenreByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":42}]}],"statement":"SELECT id, genre FROM genres WHERE id = :id AND  deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, genre FROM genres WHERE id = :id AND  deleted_at IS NULL
 * ```
 */
export const findGenreById = new PreparedQuery<IFindGenreByIdParams,IFindGenreByIdResult>(findGenreByIdIR);


/** 'CreateGenre' parameters type */
export interface ICreateGenreParams {
  genre?: string | null | void;
}

/** 'CreateGenre' return type */
export interface ICreateGenreResult {
  created_at: Date | null;
  deleted_at: Date | null;
  genre: string | null;
  id: string;
  updated_at: Date | null;
}

/** 'CreateGenre' query type */
export interface ICreateGenreQuery {
  params: ICreateGenreParams;
  result: ICreateGenreResult;
}

const createGenreIR: any = {"usedParamSet":{"genre":true},"params":[{"name":"genre","required":false,"transform":{"type":"scalar"},"locs":[{"a":35,"b":40}]}],"statement":"INSERT INTO genres (genre) VALUES (:genre) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO genres (genre) VALUES (:genre) RETURNING *
 * ```
 */
export const createGenre = new PreparedQuery<ICreateGenreParams,ICreateGenreResult>(createGenreIR);


/** 'UpdateGenreById' parameters type */
export interface IUpdateGenreByIdParams {
  genre?: string | null | void;
  id?: string | null | void;
}

/** 'UpdateGenreById' return type */
export interface IUpdateGenreByIdResult {
  created_at: Date | null;
  deleted_at: Date | null;
  genre: string | null;
  id: string;
  updated_at: Date | null;
}

/** 'UpdateGenreById' query type */
export interface IUpdateGenreByIdQuery {
  params: IUpdateGenreByIdParams;
  result: IUpdateGenreByIdResult;
}

const updateGenreByIdIR: any = {"usedParamSet":{"genre":true,"id":true},"params":[{"name":"genre","required":false,"transform":{"type":"scalar"},"locs":[{"a":26,"b":31}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":44,"b":46}]}],"statement":"UPDATE genres SET genre = :genre WHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE genres SET genre = :genre WHERE id = :id RETURNING *
 * ```
 */
export const updateGenreById = new PreparedQuery<IUpdateGenreByIdParams,IUpdateGenreByIdResult>(updateGenreByIdIR);


/** 'DeleteGenreById' parameters type */
export interface IDeleteGenreByIdParams {
  id?: string | null | void;
}

/** 'DeleteGenreById' return type */
export interface IDeleteGenreByIdResult {
  id: string;
}

/** 'DeleteGenreById' query type */
export interface IDeleteGenreByIdQuery {
  params: IDeleteGenreByIdParams;
  result: IDeleteGenreByIdResult;
}

const deleteGenreByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":48,"b":50}]}],"statement":"UPDATE genres SET deleted_at = NOW() WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE genres SET deleted_at = NOW() WHERE id = :id RETURNING id
 * ```
 */
export const deleteGenreById = new PreparedQuery<IDeleteGenreByIdParams,IDeleteGenreByIdResult>(deleteGenreByIdIR);


