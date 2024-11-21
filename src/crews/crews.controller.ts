import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CrewsService } from './crews.service';
import { CreateCrewDTO } from './dto/create-crew.dto';
import { UpdateCrewDTO } from './dto/update-crew.dto';

@Controller('crews')
export class CrewsController {
    constructor(
        private readonly crewsService: CrewsService
    ){}

    
    @Get()
    getAll(){
        return this.crewsService.getAll()
    }

    @Get('/:id')
    getById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsService.getById(id)
    }

    @Post()
    create(@Body() createCrewDTO: CreateCrewDTO){
        return this.crewsService.create(createCrewDTO)
    }

    @Put('/:id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateCrewDTO: UpdateCrewDTO){
        console.log(updateCrewDTO, "halow")
        return this.crewsService.updateById(id, updateCrewDTO)
    }

    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsService.deleteById(id)
    }
}
