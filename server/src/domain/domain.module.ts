import { Module } from '@nestjs/common';
import { DomainController } from './domain.controller';
import { DomainService } from './domain.service';
import { VirusTotalModule } from 'src/providers/virustotal/virustotal.module';

@Module({
  imports: [VirusTotalModule],
  controllers: [DomainController],
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
