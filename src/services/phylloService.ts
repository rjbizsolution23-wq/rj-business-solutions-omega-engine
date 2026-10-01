import { CONFIG } from '../config/credentials';

export interface PhylloUserCreateParams {
  name: string;
  external_id: string;
}

export class PhylloService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.leadGen.phyllo.apiKey;
    this.baseUrl = CONFIG.leadGen.phyllo.baseUrl;
  }

  /**
   * Get HTTP authorization headers for Phyllo API
   */
  private getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(this.apiKey + ':').toString('base64')}`,
      'Accept': 'application/json'
    };
  }

  /**
   * List creator work platforms supported by Phyllo (YouTube, TikTok, Instagram, etc.)
   */
  async getWorkPlatforms(): Promise<any> {
    const res = await fetch(`${this.baseUrl}/work-platforms`, {
      method: 'GET',
      headers: this.getHeaders()
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Phyllo work-platforms error (${res.status}): ${err}`);
    }

    return await res.json();
  }

  /**
   * Create or register a creator user profile in Phyllo
   */
  async createUser(params: PhylloUserCreateParams): Promise<any> {
    const res = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(params)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Phyllo create user error (${res.status}): ${err}`);
    }

    return await res.json();
  }

  /**
   * Retrieve creator profile engagement and analytics
   */
  async getProfiles(userId?: string): Promise<any> {
    const url = userId ? `${this.baseUrl}/profiles?user_id=${encodeURIComponent(userId)}` : `${this.baseUrl}/profiles`;
    const res = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders()
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Phyllo profiles error (${res.status}): ${err}`);
    }

    return await res.json();
  }
}

export const phylloService = new PhylloService();
