import { CONFIG } from '../config/credentials';

export class ApifyService {
  private token = CONFIG.leadGen.apify.token;
  private baseUrl = CONFIG.leadGen.apify.baseUrl;

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }

  // Run an Actor (e.g., Google Maps Scraper, Instagram Scraper, B2B Leads)
  public async runActor(actorId: string, input: any) {
    const response = await fetch(`${this.baseUrl}/acts/${actorId}/runs?token=${this.token}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Apify runActor failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // Get Dataset items
  public async getDatasetItems(datasetId: string, limit = 50) {
    const response = await fetch(`${this.baseUrl}/datasets/${datasetId}/items?token=${this.token}&limit=${limit}`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Apify getDatasetItems failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // Verify Account status
  public async getAccountInfo() {
    const response = await fetch(`${this.baseUrl}/users/me?token=${this.token}`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Apify getAccountInfo failed (${response.status}): ${err}`);
    }

    return response.json();
  }
}

export const apifyService = new ApifyService();
