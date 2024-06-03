import { Controller, Get, Param, Post } from '@nestjs/common';
import { DomainService } from './domain.service';

@Controller('domain')
export class DomainController {
  constructor(protected readonly domainService: DomainService) {}

  @Get(':domain')
  getDomain(@Param() params: { domain: string }) {
    return this.domainService.getDomain(params.domain);
  }

  @Post()
  createDomain() {}
}
