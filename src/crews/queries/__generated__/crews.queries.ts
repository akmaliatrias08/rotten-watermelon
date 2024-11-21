/** Types generated for queries found in "src/crews/queries/crews.queries.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

/** 'FindAllCrews' parameters type */
export type IFindAllCrewsParams = void;

/** 'FindAllCrews' return type */
export interface IFindAllCrewsResult {
  birthday: string | null;
  birthplace: string | null;
  id: string;
  name: string | null;
}

/** 'FindAllCrews' query type */
export interface IFindAllCrewsQuery {
  params: IFindAllCrewsParams;
  result: IFindAllCrewsResult;
}

const findAllCrewsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT id, name, birthday::TEXT as birthday, birthplace FROM crews WHERE deleted_at IS NULL"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, name, birthday::TEXT as birthday, birthplace FROM crews WHERE deleted_at IS NULL
 * ```
 */
export const findAllCrews = new PreparedQuery<IFindAllCrewsParams,IFindAllCrewsResult>(findAllCrewsIR);


/** 'FindCrewById' parameters type */
export interface IFindCrewByIdParams {
  id?: string | null | void;
}

/** 'FindCrewById' return type */
export interface IFindCrewByIdResult {
  biography: string | null;
  birthday: string | null;
  birthplace: string | null;
  id: string;
  name: string | null;
}

/** 'FindCrewById' query type */
export interface IFindCrewByIdQuery {
  params: IFindCrewByIdParams;
  result: IFindCrewByIdResult;
}

const findCrewByIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":89,"b":91}]}],"statement":"SELECT id, name, birthday::TEXT as birthday, birthplace, biography FROM crews WHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, name, birthday::TEXT as birthday, birthplace, biography FROM crews WHERE id = :id
 * ```
 */
export const findCrewById = new PreparedQuery<IFindCrewByIdParams,IFindCrewByIdResult>(findCrewByIdIR);


/** 'FindCrewPhotosByCrewId' parameters type */
export interface IFindCrewPhotosByCrewIdParams {
  crew_id?: string | null | void;
}

/** 'FindCrewPhotosByCrewId' return type */
export interface IFindCrewPhotosByCrewIdResult {
  id: string;
  photo: string | null;
}

/** 'FindCrewPhotosByCrewId' query type */
export interface IFindCrewPhotosByCrewIdQuery {
  params: IFindCrewPhotosByCrewIdParams;
  result: IFindCrewPhotosByCrewIdResult;
}

const findCrewPhotosByCrewIdIR: any = {"usedParamSet":{"crew_id":true},"params":[{"name":"crew_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":50,"b":57}]}],"statement":"SELECT id, photo FROM crew_photos WHERE crew_id = :crew_id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, photo FROM crew_photos WHERE crew_id = :crew_id
 * ```
 */
export const findCrewPhotosByCrewId = new PreparedQuery<IFindCrewPhotosByCrewIdParams,IFindCrewPhotosByCrewIdResult>(findCrewPhotosByCrewIdIR);


/** 'CreateCrew' parameters type */
export interface ICreateCrewParams {
  biography?: string | null | void;
  birthday?: DateOrString | null | void;
  birthplace?: string | null | void;
  name?: string | null | void;
}

/** 'CreateCrew' return type */
export interface ICreateCrewResult {
  biography: string | null;
  birthday: Date | null;
  birthplace: string | null;
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  name: string | null;
  updated_at: Date | null;
}

/** 'CreateCrew' query type */
export interface ICreateCrewQuery {
  params: ICreateCrewParams;
  result: ICreateCrewResult;
}

const createCrewIR: any = {"usedParamSet":{"name":true,"birthday":true,"birthplace":true,"biography":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":67,"b":71}]},{"name":"birthday","required":false,"transform":{"type":"scalar"},"locs":[{"a":74,"b":82}]},{"name":"birthplace","required":false,"transform":{"type":"scalar"},"locs":[{"a":85,"b":95}]},{"name":"biography","required":false,"transform":{"type":"scalar"},"locs":[{"a":98,"b":107}]}],"statement":"INSERT INTO crews (name, birthday, birthplace, biography) \nVALUES (:name, :birthday, :birthplace, :biography) RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO crews (name, birthday, birthplace, biography) 
 * VALUES (:name, :birthday, :birthplace, :biography) RETURNING *
 * ```
 */
export const createCrew = new PreparedQuery<ICreateCrewParams,ICreateCrewResult>(createCrewIR);


/** 'CreateCrewPhotos' parameters type */
export interface ICreateCrewPhotosParams {
  crewPhotos: readonly ({
    crew_id: string | null | void,
    photo: string | null | void
  })[];
}

/** 'CreateCrewPhotos' return type */
export interface ICreateCrewPhotosResult {
  created_at: Date | null;
  crew_id: string;
  deleted_at: Date | null;
  id: string;
  photo: string | null;
  updated_at: Date | null;
}

/** 'CreateCrewPhotos' query type */
export interface ICreateCrewPhotosQuery {
  params: ICreateCrewPhotosParams;
  result: ICreateCrewPhotosResult;
}

const createCrewPhotosIR: any = {"usedParamSet":{"crewPhotos":true},"params":[{"name":"crewPhotos","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"crew_id","required":false},{"name":"photo","required":false}]},"locs":[{"a":48,"b":58}]}],"statement":"INSERT INTO crew_photos (crew_id, photo) VALUES :crewPhotos RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO crew_photos (crew_id, photo) VALUES :crewPhotos RETURNING *
 * ```
 */
export const createCrewPhotos = new PreparedQuery<ICreateCrewPhotosParams,ICreateCrewPhotosResult>(createCrewPhotosIR);


/** 'UpdateCrewById' parameters type */
export interface IUpdateCrewByIdParams {
  biography?: string | null | void;
  birthplace?: string | null | void;
  id?: string | null | void;
  name?: string | null | void;
}

/** 'UpdateCrewById' return type */
export interface IUpdateCrewByIdResult {
  biography: string | null;
  birthday: Date | null;
  birthplace: string | null;
  created_at: Date | null;
  deleted_at: Date | null;
  id: string;
  name: string | null;
  updated_at: Date | null;
}

/** 'UpdateCrewById' query type */
export interface IUpdateCrewByIdQuery {
  params: IUpdateCrewByIdParams;
  result: IUpdateCrewByIdResult;
}

const updateCrewByIdIR: any = {"usedParamSet":{"name":true,"birthplace":true,"biography":true,"id":true},"params":[{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":29,"b":33}]},{"name":"birthplace","required":false,"transform":{"type":"scalar"},"locs":[{"a":54,"b":64}]},{"name":"biography","required":false,"transform":{"type":"scalar"},"locs":[{"a":84,"b":93}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":106,"b":108}]}],"statement":"UPDATE crews SET \n    name = :name, \n    birthplace = :birthplace, \n    biography = :biography\nWHERE id = :id RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE crews SET 
 *     name = :name, 
 *     birthplace = :birthplace, 
 *     biography = :biography
 * WHERE id = :id RETURNING *
 * ```
 */
export const updateCrewById = new PreparedQuery<IUpdateCrewByIdParams,IUpdateCrewByIdResult>(updateCrewByIdIR);


/** 'DeleteCrewId' parameters type */
export interface IDeleteCrewIdParams {
  id?: string | null | void;
}

/** 'DeleteCrewId' return type */
export interface IDeleteCrewIdResult {
  id: string;
}

/** 'DeleteCrewId' query type */
export interface IDeleteCrewIdQuery {
  params: IDeleteCrewIdParams;
  result: IDeleteCrewIdResult;
}

const deleteCrewIdIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":47,"b":49}]}],"statement":"UPDATE crews SET deleted_at = NOW() WHERE id = :id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE crews SET deleted_at = NOW() WHERE id = :id RETURNING id
 * ```
 */
export const deleteCrewId = new PreparedQuery<IDeleteCrewIdParams,IDeleteCrewIdResult>(deleteCrewIdIR);


/** 'DeleteCrewPhotosByCrewId' parameters type */
export interface IDeleteCrewPhotosByCrewIdParams {
  crew_id?: string | null | void;
}

/** 'DeleteCrewPhotosByCrewId' return type */
export interface IDeleteCrewPhotosByCrewIdResult {
  id: string;
}

/** 'DeleteCrewPhotosByCrewId' query type */
export interface IDeleteCrewPhotosByCrewIdQuery {
  params: IDeleteCrewPhotosByCrewIdParams;
  result: IDeleteCrewPhotosByCrewIdResult;
}

const deleteCrewPhotosByCrewIdIR: any = {"usedParamSet":{"crew_id":true},"params":[{"name":"crew_id","required":false,"transform":{"type":"scalar"},"locs":[{"a":40,"b":47}]}],"statement":"DELETE FROM crew_photos WHERE crew_id = :crew_id RETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM crew_photos WHERE crew_id = :crew_id RETURNING id
 * ```
 */
export const deleteCrewPhotosByCrewId = new PreparedQuery<IDeleteCrewPhotosByCrewIdParams,IDeleteCrewPhotosByCrewIdResult>(deleteCrewPhotosByCrewIdIR);


