import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(
        private readonly rolesService: RolesService
    ) {} 

    @Post()
    create(@Body() createRoleDTO: CreateRoleDTO) {
      return this.rolesService.create(createRoleDTO)
    }

    @Get('/:id')
    getOneById(@Param('id', ParseUUIDPipe) id: string){
        return this.rolesService.getRoleById(id)
    }
}
