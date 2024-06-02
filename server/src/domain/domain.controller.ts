import { Controller, Get, Post } from '@nestjs/common';

@Controller('domain')
export class DomainController {
  @Get()
  getDomain() {}

  @Post()
  createDomain() {}
}
