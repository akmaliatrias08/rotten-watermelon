import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from '../auth/dto/login.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
    
    @Get()
    getAll(){
        return this.usersService.getAll()
    }

    @Get('/:id')
    getById(@Param('id', ParseUUIDPipe) id: string){
        return this.usersService.getById(id)
    }

    @Delete('/:id')
    delteById(@Param('id', ParseUUIDPipe) id: string){
        return this.usersService.deleteById(id)
    }
}
