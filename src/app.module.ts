import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
