import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
    constructor(
        private readonly rolesService: RolesService
    ) {}
    
    @Get()
    getAll(){
        return this.rolesService.getAll()
    }

    @Post()
    create(@Body() createRoleDTO: CreateRoleDTO) {
      return this.rolesService.create(createRoleDTO)
    }
    
    @Get('/:id')
    getOneById(@Param('id', ParseUUIDPipe) id: string){
        return this.rolesService.getById(id)
    }

      
    @Put('/:id')
    updateById(@Param('id', ParseUUIDPipe) id: string,@Body() updateRoleDTO: UpdateRoleDTO ){
        return this.rolesService.updateById(id, updateRoleDTO)
    }
    
    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.rolesService.deleteById(id)
    }
}
