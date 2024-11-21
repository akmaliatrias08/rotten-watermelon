/** Types generated for queries found in "src/movies-types/queries/movie-types.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllMovieType' parameters type */
export type IFindAllMovieTypeParams = void;

/** 'FindAllMovieType' return type */
export interface IFindAllMovieTypeResult {
  id: string;
  type: string | null;
}

/** 'FindAllMovieType' query type */
export interface IFindAllMovieTypeQuery {
  params: IFindAllMovieTypeParams;
  result: IFindAllMovieTypeResult;
}

const findAllMovieTypeIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, type FROM movies_types WHERE deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, type FROM movies_types WHERE deleted_at IS NULL
 * ```
 */
export const findAllMovieType = new PreparedQuery<IFindAllMovieTypeParams,IFindAllMovieTypeResult>(findAllMovieTypeIR);


/** 'FindMovieTypeById' parameters type */
export interface IFindMovieTypeByIdParams {
  id?: string | null | void;
}

/** 'FindMovieTypeById' return type */
export interface IFindMovieTypeByIdResult {
  id: string;
  type: string | null;
}

/** 'FindMovieTypeById' query type */
export interface IFindMovieTypeByIdQuery {
  params: IFindMovieTypeByIdParams;
  result: IFindMovieTypeByIdResult;
}

const findMovieTypeByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":47}]}],"statement":"SELECT id, type FROM movies_types WHERE id = :id AND  deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, type FROM movies_types WHERE id = :id AND  deleted_at IS NULL
 * ```
 */
export const findMovieTypeById = new PreparedQuery<IFindMovieTypeByIdParams,IFindMovieTypeByIdResult>(findMovieTypeByIdIR);


/** 'CreateMovieType' parameters type */
export interface ICreateMovieTypeParams {
  type?: string | null | void;
}

/** 'CreateMovieType' return type */
export interface ICreateMovieTypeResult {
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  type: string | null;
  updated_at: Date | null;
}

/** 'CreateMovieType' query type */
export interface ICreateMovieTypeQuery {
  params: ICreateMovieTypeParams;
  result: ICreateMovieTypeResult;
}

const createMovieTypeIR: any = {"usedParamSet":{"type":true},"params":[{"name":"type","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":44}]}],"statement":"INSERT INTO movies_types (type) VALUES (:type) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO movies_types (type) VALUES (:type) RETURNING *
 * ```
 */
export const createMovieType = new PreparedQuery<ICreateMovieTypeParams,ICreateMovieTypeResult>(createMovieTypeIR);


/** 'UpdateMovieTypeById' parameters type */
export interface IUpdateMovieTypeByIdParams {
  id?: string | null | void;
  type?: string | null | void;
}

/** 'UpdateMovieTypeById' return type */
export interface IUpdateMovieTypeByIdResult {
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  type: string | null;
  updated_at: Date | null;
}

/** 'UpdateMovieTypeById' query type */
export interface IUpdateMovieTypeByIdQuery {
  params: IUpdateMovieTypeByIdParams;
  result: IUpdateMovieTypeByIdResult;
}

const updateMovieTypeByIdIR: any = {"usedParamSet":{"type":true,"id":true},"params":[{"name":"type","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":35}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":48,"b":50}]}],"statement":"UPDATE movies_types SET type = :type WHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE movies_types SET type = :type WHERE id = :id RETURNING *
 * ```
 */
export const updateMovieTypeById = new PreparedQuery<IUpdateMovieTypeByIdParams,IUpdateMovieTypeByIdResult>(updateMovieTypeByIdIR);


/** 'DeleteMovieTypeById' parameters type */
export interface IDeleteMovieTypeByIdParams {
  id?: string | null | void;
}

/** 'DeleteMovieTypeById' return type */
export interface IDeleteMovieTypeByIdResult {
  id: string;
}

/** 'DeleteMovieTypeById' query type */
export interface IDeleteMovieTypeByIdQuery {
  params: IDeleteMovieTypeByIdParams;
  result: IDeleteMovieTypeByIdResult;
}

const deleteMovieTypeByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":54,"b":56}]}],"statement":"UPDATE movies_types SET deleted_at = NOW() WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE movies_types SET deleted_at = NOW() WHERE id = :id RETURNING id
 * ```
 */
export const deleteMovieTypeById = new PreparedQuery<IDeleteMovieTypeByIdParams,IDeleteMovieTypeByIdResult>(deleteMovieTypeByIdIR);


