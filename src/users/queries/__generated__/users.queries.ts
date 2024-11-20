/** Types generated for queries found in "src/users/queries/users.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateUser' parameters type */
export interface ICreateUserParams {
  avatar?: string | null | void;
  email?: string | null | void;
  password?: string | null | void;
  role_id?: string | null | void;
  salt?: string | null | void;
  username?: string | null | void;
}

/** 'CreateUser' return type */
export interface ICreateUserResult {
  avatar: string | null;
  created_at: Date | null;
  deleted_at: Date | null;
  email: string | null;
  id: string;
  password: string | null;
  role_id: string;
  salt: string | null;
  updated_at: Date | null;
  username: string | null;
}

/** 'CreateUser' query type */
export interface ICreateUserQuery {
  params: ICreateUserParams;
  result: ICreateUserResult;
}

const createUserIR: any = {"usedParamSet":{"role_id":true,"email":true,"username":true,"password":true,"salt":true,"avatar":true},"params":[{"name":"role_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":87,"b":94}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":97,"b":102}]},{"name":"username","required":false,"transform":{"type":"scalar"},"locs":[{"a":105,"b":113}]},{"name":"password","required":false,"transform":{"type":"scalar"},"locs":[{"a":116,"b":124}]},{"name":"salt","required":false,"transform":{"type":"scalar"},"locs":[{"a":127,"b":131}]},{"name":"avatar","required":false,"transform":{"type":"scalar"},"locs":[{"a":134,"b":140}]}],"statement":"INSERT INTO \n    mst_users (role_id, email, username, password, salt, avatar) \nVALUES (:role_id, :email, :username, :password, :salt, :avatar) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO 
 *     mst_users (role_id, email, username, password, salt, avatar) 
 * VALUES (:role_id, :email, :username, :password, :salt, :avatar) RETURNING *
 * ```
 */
export const createUser = new PreparedQuery<ICreateUserParams,ICreateUserResult>(createUserIR);


/** 'FindAllUser' parameters type */
export type IFindAllUserParams = void;

/** 'FindAllUser' return type */
export interface IFindAllUserResult {
  avatar: string | null;
  email: string | null;
  id: string;
  role_id: string;
  username: string | null;
}

/** 'FindAllUser' query type */
export interface IFindAllUserQuery {
  params: IFindAllUserParams;
  result: IFindAllUserResult;
}

const findAllUserIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, role_id, username, email, avatar FROM mst_users"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, role_id, username, email, avatar FROM mst_users
 * ```
 */
export const findAllUser = new PreparedQuery<IFindAllUserParams,IFindAllUserResult>(findAllUserIR);


/** 'FindUserById' parameters type */
export interface IFindUserByIdParams {
  id?: string | null | void;
}

/** 'FindUserById' return type */
export interface IFindUserByIdResult {
  email: string | null;
  id: string;
  role_id: string;
  username: string | null;
}

/** 'FindUserById' query type */
export interface IFindUserByIdQuery {
  params: IFindUserByIdParams;
  result: IFindUserByIdResult;
}

const findUserByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":62,"b":64}]}],"statement":"SELECT id, role_id, username, email FROM mst_users WHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, role_id, username, email FROM mst_users WHERE id = :id
 * ```
 */
export const findUserById = new PreparedQuery<IFindUserByIdParams,IFindUserByIdResult>(findUserByIdIR);


/** 'UpdateUserById' parameters type */
export interface IUpdateUserByIdParams {
  avatar?: string | null | void;
  email?: string | null | void;
  id?: string | null | void;
  role_id?: string | null | void;
  username?: string | null | void;
}

/** 'UpdateUserById' return type */
export interface IUpdateUserByIdResult {
  avatar: string | null;
  created_at: Date | null;
  deleted_at: Date | null;
  email: string | null;
  id: string;
  password: string | null;
  role_id: string;
  salt: string | null;
  updated_at: Date | null;
  username: string | null;
}

/** 'UpdateUserById' query type */
export interface IUpdateUserByIdQuery {
  params: IUpdateUserByIdParams;
  result: IUpdateUserByIdResult;
}

const updateUserByIdIR: any = {"usedParamSet":{"role_id":true,"username":true,"email":true,"avatar":true,"id":true},"params":[{"name":"role_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":36,"b":43}]},{"name":"username","required":false,"transform":{"type":"scalar"},"locs":[{"a":62,"b":70}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":86,"b":91}]},{"name":"avatar","required":false,"transform":{"type":"scalar"},"locs":[{"a":108,"b":114}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":127,"b":129}]}],"statement":"UPDATE mst_users SET \n    role_id = :role_id, \n    username = :username, \n    email = :email, \n    avatar = :avatar\nWHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE mst_users SET 
 *     role_id = :role_id, 
 *     username = :username, 
 *     email = :email, 
 *     avatar = :avatar
 * WHERE id = :id RETURNING *
 * ```
 */
export const updateUserById = new PreparedQuery<IUpdateUserByIdParams,IUpdateUserByIdResult>(updateUserByIdIR);


/** 'DeleteuserById' parameters type */
export interface IDeleteuserByIdParams {
  id?: string | null | void;
}

/** 'DeleteuserById' return type */
export interface IDeleteuserByIdResult {
  id: string;
}

/** 'DeleteuserById' query type */
export interface IDeleteuserByIdQuery {
  params: IDeleteuserByIdParams;
  result: IDeleteuserByIdResult;
}

const deleteuserByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":51,"b":53}]}],"statement":"UPDATE mst_users SET deleted_at = NOW() WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE mst_users SET deleted_at = NOW() WHERE id = :id RETURNING id
 * ```
 */
export const deleteuserById = new PreparedQuery<IDeleteuserByIdParams,IDeleteuserByIdResult>(deleteuserByIdIR);


/** 'CheckUserUnique' parameters type */
export interface ICheckUserUniqueParams {
  email?: string | null | void;
  username?: string | null | void;
}

/** 'CheckUserUnique' return type */
export interface ICheckUserUniqueResult {
  email: string | null;
  id: string;
  username: string | null;
}

/** 'CheckUserUnique' query type */
export interface ICheckUserUniqueQuery {
  params: ICheckUserUniqueParams;
  result: ICheckUserUniqueResult;
}

const checkUserUniqueIR: any = {"usedParamSet":{"email":true,"username":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":56,"b":61}]},{"name":"username","required":false,"transform":{"type":"scalar"},"locs":[{"a":77,"b":85}]}],"statement":"SELECT id, email, username FROM mst_users WHERE email = :email OR username = :username"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, email, username FROM mst_users WHERE email = :email OR username = :username
 * ```
 */
export const checkUserUnique = new PreparedQuery<ICheckUserUniqueParams,ICheckUserUniqueResult>(checkUserUniqueIR);


/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
  email?: string | null | void;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
  email: string | null;
  id: string;
  password: string | null;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
  params: IFindUserByEmailParams;
  result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":56,"b":61}]}],"statement":"SELECT id, email, password FROM mst_users WHERE email = :email"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, email, password FROM mst_users WHERE email = :email
 * ```
 */
export const findUserByEmail = new PreparedQuery<IFindUserByEmailParams,IFindUserByEmailResult>(findUserByEmailIR);


