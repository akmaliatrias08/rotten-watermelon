import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CrewsPositionsService } from './crews_positions.service';
import { CreateCrewPositionDTO } from './dto/create-crew-position.dto';
import { UpdateCrewPositionDTO } from './dto/update-crew-position.sto';

@Controller('crews-positions')
export class CrewsPositionsController {
    constructor(
        private readonly crewsPostionsService: CrewsPositionsService
    ) {}

    @Get()
    getAll(){
        return this.crewsPostionsService.getAll()
    }

    @Post()
    create(@Body() createCrewPositionDTO: CreateCrewPositionDTO) {
      return this.crewsPostionsService.create(createCrewPositionDTO)
    }
    
    @Get('/:id')
    getOneById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsPostionsService.getById(id)
    }

      
    @Put('/:id')
    updateById(@Param('id', ParseUUIDPipe) id: string,@Body() updateCrewPosition: UpdateCrewPositionDTO ){
        return this.crewsPostionsService.updateById(id, updateCrewPosition)
    }
    
    @Delete('/:id')
    deleteById(@Param('id', ParseUUIDPipe) id: string){
        return this.crewsPostionsService.deleteById(id)
    }
}
