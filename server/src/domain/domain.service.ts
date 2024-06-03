import { Injectable } from '@nestjs/common';
import { VirusTotalService } from 'src/providers/virustotal/virustotal.service';

@Injectable()
export class DomainService {
  constructor(private readonly virustotalService: VirusTotalService) {}

  async getDomain(domain: string) {
    const virustotalData = await this.virustotalService.getReport(domain);

    return 'domain';
  }
}
