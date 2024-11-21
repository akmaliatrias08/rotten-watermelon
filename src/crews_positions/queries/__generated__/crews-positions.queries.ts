/** Types generated for queries found in "src/crews_positions/queries/crews-positions.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllCrewPosition' parameters type */
export type IFindAllCrewPositionParams = void;

/** 'FindAllCrewPosition' return type */
export interface IFindAllCrewPositionResult {
  id: string;
  position: string | null;
}

/** 'FindAllCrewPosition' query type */
export interface IFindAllCrewPositionQuery {
  params: IFindAllCrewPositionParams;
  result: IFindAllCrewPositionResult;
}

const findAllCrewPositionIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, position FROM crews_positions WHERE deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, position FROM crews_positions WHERE deleted_at IS NULL
 * ```
 */
export const findAllCrewPosition = new PreparedQuery<IFindAllCrewPositionParams,IFindAllCrewPositionResult>(findAllCrewPositionIR);


/** 'FindCrewPositionById' parameters type */
export interface IFindCrewPositionByIdParams {
  id?: string | null | void;
}

/** 'FindCrewPositionById' return type */
export interface IFindCrewPositionByIdResult {
  id: string;
  position: string | null;
}

/** 'FindCrewPositionById' query type */
export interface IFindCrewPositionByIdQuery {
  params: IFindCrewPositionByIdParams;
  result: IFindCrewPositionByIdResult;
}

const findCrewPositionByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":52,"b":54}]}],"statement":"SELECT id, position FROM crews_positions WHERE id = :id AND  deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, position FROM crews_positions WHERE id = :id AND  deleted_at IS NULL
 * ```
 */
export const findCrewPositionById = new PreparedQuery<IFindCrewPositionByIdParams,IFindCrewPositionByIdResult>(findCrewPositionByIdIR);


/** 'CreateCrewPosition' parameters type */
export interface ICreateCrewPositionParams {
  position?: string | null | void;
}

/** 'CreateCrewPosition' return type */
export interface ICreateCrewPositionResult {
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  position: string | null;
  updated_at: Date | null;
}

/** 'CreateCrewPosition' query type */
export interface ICreateCrewPositionQuery {
  params: ICreateCrewPositionParams;
  result: ICreateCrewPositionResult;
}

const createCrewPositionIR: any = {"usedParamSet":{"position":true},"params":[{"name":"position","required":false,"transform":{"type":"scalar"},"locs":[{"a":47,"b":55}]}],"statement":"INSERT INTO crews_positions (position) VALUES (:position) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO crews_positions (position) VALUES (:position) RETURNING *
 * ```
 */
export const createCrewPosition = new PreparedQuery<ICreateCrewPositionParams,ICreateCrewPositionResult>(createCrewPositionIR);


/** 'UpdateCrewPositionById' parameters type */
export interface IUpdateCrewPositionByIdParams {
  id?: string | null | void;
  position?: string | null | void;
}

/** 'UpdateCrewPositionById' return type */
export interface IUpdateCrewPositionByIdResult {
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  position: string | null;
  updated_at: Date | null;
}

/** 'UpdateCrewPositionById' query type */
export interface IUpdateCrewPositionByIdQuery {
  params: IUpdateCrewPositionByIdParams;
  result: IUpdateCrewPositionByIdResult;
}

const updateCrewPositionByIdIR: any = {"usedParamSet":{"position":true,"id":true},"params":[{"name":"position","required":false,"transform":{"type":"scalar"},"locs":[{"a":38,"b":46}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":59,"b":61}]}],"statement":"UPDATE crews_positions SET position = :position WHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE crews_positions SET position = :position WHERE id = :id RETURNING *
 * ```
 */
export const updateCrewPositionById = new PreparedQuery<IUpdateCrewPositionByIdParams,IUpdateCrewPositionByIdResult>(updateCrewPositionByIdIR);


/** 'DeleteCrewPositionById' parameters type */
export interface IDeleteCrewPositionByIdParams {
  id?: string | null | void;
}

/** 'DeleteCrewPositionById' return type */
export interface IDeleteCrewPositionByIdResult {
  id: string;
}

/** 'DeleteCrewPositionById' query type */
export interface IDeleteCrewPositionByIdQuery {
  params: IDeleteCrewPositionByIdParams;
  result: IDeleteCrewPositionByIdResult;
}

const deleteCrewPositionByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":57,"b":59}]}],"statement":"UPDATE crews_positions SET deleted_at = NOW() WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE crews_positions SET deleted_at = NOW() WHERE id = :id RETURNING id
 * ```
 */
export const deleteCrewPositionById = new PreparedQuery<IDeleteCrewPositionByIdParams,IDeleteCrewPositionByIdResult>(deleteCrewPositionByIdIR);


