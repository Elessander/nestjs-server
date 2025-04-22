import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule }  from './prisma/prisma.module';
import { ToDoModule } from './to-do-list/to-do-module'

@Module({
  imports: [
    PrismaModule,
    ToDoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
