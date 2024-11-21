import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CrewsModule } from './crews/crews.module';
import { MoviesTypesModule } from './movies-types/movies-types.module';
import { GenresModule } from './genres/genres.module';
import { CrewsPositionsModule } from './crews_positions/crews_positions.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [DatabaseModule, RolesModule, UsersModule, AuthModule, CrewsModule, MoviesTypesModule, GenresModule, CrewsPositionsModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
