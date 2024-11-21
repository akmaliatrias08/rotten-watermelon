import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DatabaseModule } from 'src/database/database.module';
import { MoviesTypesModule } from 'src/movies-types/movies-types.module';

@Module({
  imports: [DatabaseModule, MoviesTypesModule],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
