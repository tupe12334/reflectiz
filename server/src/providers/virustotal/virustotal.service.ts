import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { VIRUS_TOTAL_API_KEY } from 'src/constants';
import axios, { AxiosInstance } from 'axios';
import { VirusTotalDomainResponse } from './types';

@Injectable()
export class VirusTotalService {
  private apiKey: string;
  private axiosInstance: AxiosInstance;
  constructor(private readonly configService: ConfigService) {
    const envApiKey = configService.get<string>(VIRUS_TOTAL_API_KEY);
    if (!envApiKey) {
      throw new Error('VIRUS_TOTAL_API_KEY is not defined');
    }
    this.apiKey = envApiKey;
    this.axiosInstance = axios.create({
      baseURL: 'https://www.virustotal.com/api/v3/domains',
      headers: {
        'x-apikey': this.apiKey,
      },
    });
  }

  async getReport(url: string): Promise<VirusTotalDomainResponse> {
    const response =
      await this.axiosInstance.get<VirusTotalDomainResponse>(url);
    const { data } = response;
    return data;
  }
}
