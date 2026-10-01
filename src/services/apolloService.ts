import { CONFIG } from '../config/credentials';

export interface ApolloPersonMatchParams {
  first_name?: string;
  last_name?: string;
  name?: string;
  email?: string;
  organization_name?: string;
  domain?: string;
  linkedin_url?: string;
}

export interface ApolloSearchPeopleParams {
  q_keywords?: string;
  person_titles?: string[];
  organization_domains?: string[];
  person_locations?: string[];
  page?: number;
  per_page?: number;
}

export class ApolloService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.leadGen.apollo.apiKey;
    this.baseUrl = CONFIG.leadGen.apollo.baseUrl;
  }

  /**
   * Enrich and match a specific B2B contact
   */
  async matchPerson(params: ApolloPersonMatchParams): Promise<any> {
    const res = await fetch(`${this.baseUrl}/people/match`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(params)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Apollo API error (${res.status}): ${err}`);
    }

    return await res.json();
  }

  /**
   * Search for decision makers and business leads across target titles/locations
   */
  async searchPeople(params: ApolloSearchPeopleParams): Promise<any> {
    const res = await fetch(`${this.baseUrl}/mixed_people/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(params)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Apollo search error (${res.status}): ${err}`);
    }

    return await res.json();
  }

  /**
   * Enrich an organization by domain name
   */
  async enrichOrganization(domain: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/organizations/enrich?domain=${encodeURIComponent(domain)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Api-Key': this.apiKey
      }
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Apollo org enrichment error (${res.status}): ${err}`);
    }

    return await res.json();
  }
}

export const apolloService = new ApolloService();
