import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CrewsService } from './crews.service';
import { CreateCrewDTO } from './dto/create-crew.dto';
import { UpdateCrewDTO } from './dto/update-crew.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('crews')
export class CrewsController {
    constructor(
        private readonly crewsService: CrewsService
    ){}

    
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.crewsService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsService.getById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCrewDTO: CreateCrewDTO){
        return this.crewsService.create(createCrewDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCrewDTO: UpdateCrewDTO){
        console.log(updateCrewDTO, "halow")
        return this.crewsService.updateById(id, updateCrewDTO)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsService.deleteById(id)
    }
}
