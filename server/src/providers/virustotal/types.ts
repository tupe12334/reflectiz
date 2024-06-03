export enum AnalysisResultCategory {
  Harmless = 'harmless',
  Undetected = 'undetected',
}

export enum AnalysisResultResult {
  Clean = 'clean',
  Unrated = 'unrated',
}

export interface AnalysisResult {
  method: string;
  engine_name: string;
  category: AnalysisResultCategory;
  result: AnalysisResultResult;
}
export interface VirusTotalDomainResponse {
  data: {
    id: string;
    type: string;
    links: { self: string };
    attributes: {
      last_https_certificate: Record<string, any>[];
      popularity_ranks: Record<string, any>[];
      last_dns_records_date: number;
      whois_date: number;
      whois: string;
      last_update_date: number;
      last_analysis_results: Record<string, AnalysisResult>;
      reputation: number;
      tld: string;
      creation_date: number;
      last_analysis_date: number;
      last_analysis_stats: Record<string, any>[];
      categories: Record<string, any>[];
      tags: [];
      last_https_certificate_date: number;
      registrar: string;
      last_modification_date: number;
      total_votes: Record<string, any>[];
      jarm: string;
      last_dns_records: [];
    };
  };
}
