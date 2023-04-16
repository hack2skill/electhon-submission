import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('uploads/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'uploads', filename));
  }
}
