import { CONFIG } from '../config/credentials';

export interface BuiltWithDomainLookupResult {
  Results?: Array<{
    Result: {
      Paths: Array<{
        Domain: string;
        Technologies: Array<{
          Name: string;
          Description?: string;
          Link?: string;
          Tag?: string;
          Categories?: string[];
        }>;
      }>;
    };
  }>;
  Errors?: any[];
  [key: string]: any;
}

export class BuiltWithService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.leadGen.builtwith.apiKey;
    this.baseUrl = CONFIG.leadGen.builtwith.baseUrl;
  }

  /**
   * Look up technical stack & tool profile of a target domain
   * @param domain Domain to analyze (e.g. "rjbusinesssolutions.org", "shopify.com")
   */
  async lookupDomain(domain: string): Promise<BuiltWithDomainLookupResult> {
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim();
    const url = `${this.baseUrl}/v20/api.json?KEY=${this.apiKey}&LOOKUP=${encodeURIComponent(cleanDomain)}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`BuiltWith API error (${res.status}): ${err}`);
    }

    return await res.json();
  }

  /**
   * Extract high-level summary of CRM, CMS, Analytics and Advertising tech
   */
  async getTechnologySummary(domain: string): Promise<{ domain: string; technologies: string[]; categories: Record<string, string[]> }> {
    const raw = await this.lookupDomain(domain);
    const techList: string[] = [];
    const categoryMap: Record<string, string[]> = {};

    if (raw.Results && raw.Results.length > 0) {
      for (const result of raw.Results) {
        for (const pathObj of result.Result.Paths || []) {
          for (const tech of pathObj.Technologies || []) {
            if (tech.Name && !techList.includes(tech.Name)) {
              techList.push(tech.Name);
              const tag = tech.Tag || 'General';
              if (!categoryMap[tag]) categoryMap[tag] = [];
              categoryMap[tag].push(tech.Name);
            }
          }
        }
      }
    }

    return {
      domain,
      technologies: techList,
      categories: categoryMap
    };
  }
}

export const builtwithService = new BuiltWithService();
