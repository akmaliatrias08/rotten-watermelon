import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { createRole, deleteRoleById, findAllRole, findRoleById, updateRoleById } from './queries/__generated__/roles.queries';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';
import { throwError } from 'rxjs';
import { error } from 'console';
import { ResponseUtil } from 'src/utils/response.util';

@Injectable()
export class RolesService {
    constructor(@Inject('PG_CLIENT') private readonly dbClient: any){}

    async getAll(){
        let success :boolean

        try {
            const roles = await findAllRole.run(undefined, this.dbClient)
            return ResponseUtil.success(roles)
        } catch (e) {
            throw e
        }
    }

    async getById(id: string){
        let success :boolean

        try {
            const role = await findRoleById.run({id: id}, this.dbClient)
            
            if (role.length == 0) {
                throw new Error("error record not found")
            }

            return ResponseUtil.success(role[0])
        } catch (e) {
            if (e.message === "error record not found") {
                throw ResponseUtil.error("record not found", `record with id = ${id} in table mst_roles not found`, HttpStatus.NOT_FOUND)
            }

            throw e
        }
    }

    async create(createRoleDTO: CreateRoleDTO){
        let success: boolean
        try {
            const role = await createRole.run({role: createRoleDTO.role}, this.dbClient)
            return ResponseUtil.success(role[0], HttpStatus.CREATED);
        } catch (e) {
            throw e
        }
    }

    async updateById(id: string, updateRoleDTO: UpdateRoleDTO){
        try {
            //validation the id is exist
            await this.getById(id)

            const updatedRole = await updateRoleById.run({id, role: updateRoleDTO.role}, this.dbClient)
            return ResponseUtil.success(updatedRole[0])
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: string){
        try {
            //validation the id is exist
            await this.getById(id)

            const deleteRole = await deleteRoleById.run({id}, this.dbClient)
            return ResponseUtil.success(deleteRole[0])
        } catch (e) {
            throw e
        }
       
    }
}
