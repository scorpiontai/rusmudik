import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma/prisma.service';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'debug',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],   
  }),
  ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
