/** Types generated for queries found in "src/roles/queries/roles.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindAllRole' parameters type */
export type IFindAllRoleParams = void;

/** 'FindAllRole' return type */
export interface IFindAllRoleResult {
  id: string;
  role: string | null;
}

/** 'FindAllRole' query type */
export interface IFindAllRoleQuery {
  params: IFindAllRoleParams;
  result: IFindAllRoleResult;
}

const findAllRoleIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, role FROM mst_roles"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, role FROM mst_roles
 * ```
 */
export const findAllRole = new PreparedQuery<IFindAllRoleParams,IFindAllRoleResult>(findAllRoleIR);


/** 'FindRoleById' parameters type */
export interface IFindRoleByIdParams {
  id?: string | null | void;
}

/** 'FindRoleById' return type */
export interface IFindRoleByIdResult {
  id: string;
  role: string | null;
}

/** 'FindRoleById' query type */
export interface IFindRoleByIdQuery {
  params: IFindRoleByIdParams;
  result: IFindRoleByIdResult;
}

const findRoleByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":42,"b":44}]}],"statement":"SELECT id, role FROM mst_roles WHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, role FROM mst_roles WHERE id = :id
 * ```
 */
export const findRoleById = new PreparedQuery<IFindRoleByIdParams,IFindRoleByIdResult>(findRoleByIdIR);


/** 'CreateRole' parameters type */
export interface ICreateRoleParams {
  role?: string | null | void;
}

/** 'CreateRole' return type */
export interface ICreateRoleResult {
  id: string;
  role: string | null;
}

/** 'CreateRole' query type */
export interface ICreateRoleQuery {
  params: ICreateRoleParams;
  result: ICreateRoleResult;
}

const createRoleIR: any = {"usedParamSet":{"role":true},"params":[{"name":"role","required":false,"transform":{"type":"scalar"},"locs":[{"a":37,"b":41}]}],"statement":"INSERT INTO mst_roles (role) VALUES (:role) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO mst_roles (role) VALUES (:role) RETURNING *
 * ```
 */
export const createRole = new PreparedQuery<ICreateRoleParams,ICreateRoleResult>(createRoleIR);


/** 'UpdateRoleById' parameters type */
export interface IUpdateRoleByIdParams {
  id?: string | null | void;
  role?: string | null | void;
}

/** 'UpdateRoleById' return type */
export interface IUpdateRoleByIdResult {
  id: string;
  role: string | null;
}

/** 'UpdateRoleById' query type */
export interface IUpdateRoleByIdQuery {
  params: IUpdateRoleByIdParams;
  result: IUpdateRoleByIdResult;
}

const updateRoleByIdIR: any = {"usedParamSet":{"role":true,"id":true},"params":[{"name":"role","required":false,"transform":{"type":"scalar"},"locs":[{"a":28,"b":32}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":47}]}],"statement":"UPDATE mst_roles SET role = :role WHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE mst_roles SET role = :role WHERE id = :id RETURNING *
 * ```
 */
export const updateRoleById = new PreparedQuery<IUpdateRoleByIdParams,IUpdateRoleByIdResult>(updateRoleByIdIR);


/** 'DeleteRoleById' parameters type */
export interface IDeleteRoleByIdParams {
  id?: string | null | void;
}

/** 'DeleteRoleById' return type */
export interface IDeleteRoleByIdResult {
  id: string;
}

/** 'DeleteRoleById' query type */
export interface IDeleteRoleByIdQuery {
  params: IDeleteRoleByIdParams;
  result: IDeleteRoleByIdResult;
}

const deleteRoleByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":33,"b":35}]}],"statement":"DELETE FROM mst_roles WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM mst_roles WHERE id = :id RETURNING id
 * ```
 */
export const deleteRoleById = new PreparedQuery<IDeleteRoleByIdParams,IDeleteRoleByIdResult>(deleteRoleByIdIR);


