import { CONFIG } from '../config/credentials';

export interface BrightDataScrapeRequest {
  url: string;
  zone?: string;
  format?: 'raw' | 'json';
  country?: string;
}

export class BrightDataService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.leadGen.brightdata.apiKey;
    this.baseUrl = CONFIG.leadGen.brightdata.baseUrl;
  }

  /**
   * Scrape a target URL using Bright Data Web Unlocker / Scraping Browser API
   */
  async scrapeUrl(params: BrightDataScrapeRequest): Promise<{ url: string; content: string; status: number }> {
    const zone = params.zone || 'web_unlocker1';
    const endpoint = `${this.baseUrl}/request`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        url: params.url,
        zone: zone,
        format: params.format || 'raw',
        country: params.country || 'us'
      })
    });

    const status = res.status;
    const content = await res.text();

    return {
      url: params.url,
      content,
      status
    };
  }

  /**
   * Query Bright Data SERP API for real-time Google search rankings
   */
  async searchSerp(query: string, country = 'us'): Promise<any> {
    const endpoint = `${this.baseUrl}/serp/req`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        query,
        country,
        search_engine: 'google'
      })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Bright Data SERP error (${res.status}): ${err}`);
    }

    return await res.json();
  }
}

export const brightdataService = new BrightDataService();
