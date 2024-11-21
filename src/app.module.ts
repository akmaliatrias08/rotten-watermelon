import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CrewsModule } from './crews/crews.module';

@Module({
  imports: [DatabaseModule, RolesModule, UsersModule, AuthModule, CrewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
