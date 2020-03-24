import { Controller, Get, Res, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param() params): { name: string } {
    return { name: params.id };
    // return this.appService.getHello();
  }

  @Get('test')
  getTest(): string {
    return 'Merhabalar';
  }
}
