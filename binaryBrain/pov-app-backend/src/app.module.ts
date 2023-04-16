import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PovModule } from './pov/pov.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config';
import * as path from 'path';
import * as express from 'express';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    PovModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { uri: configService.get<string>("database.mongodbUri") }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
