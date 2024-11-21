import { Module } from '@nestjs/common';
import { MoviesTypesController } from './movies-types.controller';
import { MoviesTypesService } from './movies-types.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesTypesController],
  providers: [MoviesTypesService]
})
export class MoviesTypesModule {}
