import { Module } from '@nestjs/common';
import { CrewsPositionsController } from './crews_positions.controller';
import { CrewsPositionsService } from './crews_positions.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CrewsPositionsController],
  providers: [CrewsPositionsService]
})
export class CrewsPositionsModule {}
