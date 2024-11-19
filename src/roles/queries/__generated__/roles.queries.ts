/** Types generated for queries found in "src/roles/queries/roles.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

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

const findRoleByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":35,"b":37}]}],"statement":"SELECT * FROM mst_roles WHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM mst_roles WHERE id = :id
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


