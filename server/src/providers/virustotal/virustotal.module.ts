import { Module } from '@nestjs/common';
import { VirusTotalService } from './virustotal.service';

@Module({
  exports: [VirusTotalService],
  providers: [VirusTotalService],
})
export class VirusTotalModule {}
