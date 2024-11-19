import { Inject, Injectable } from '@nestjs/common';
import { createRole, findRoleById } from './queries/__generated__/roles.queries';
import { CreateRoleDTO } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@Inject('PG_CLIENT') private readonly dbClient: any){}

    async getRoleById(id: string){
        const role =  await findRoleById.run({id: id}, this.dbClient)
        return role[0];
    }

    async create(createRoleDTO: CreateRoleDTO){
        const role = await createRole.run({role: createRoleDTO.role}, this.dbClient)
        return role[0];
    }
    
}
