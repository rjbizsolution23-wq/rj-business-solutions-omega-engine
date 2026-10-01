import { CONFIG, GHLSubAccountConfig } from '../config/credentials';

export class GHLService {
  private baseUrl = 'https://services.leadconnectorhq.com';
  private apiVersion = '2021-07-28';

  private getHeaders(token: string) {
    return {
      'Authorization': `Bearer ${token}`,
      'Version': this.apiVersion,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  // Get subaccount config by ID or Location ID
  public getSubAccountConfig(idOrLocationId: string): GHLSubAccountConfig | undefined {
    return CONFIG.ghl.subaccounts.find(
      sub => sub.id === idOrLocationId || sub.locationId === idOrLocationId
    );
  }

  // Get Token for location or fallback to agency
  public getTokenForLocation(locationId?: string): string {
    if (locationId) {
      const sub = CONFIG.ghl.subaccounts.find(s => s.locationId === locationId || s.id === locationId);
      if (sub && sub.pitToken) {
        return sub.pitToken;
      }
    }
    return CONFIG.ghl.agency.pit;
  }

  // Verify Location Access
  public async getLocation(locationId: string) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/locations/${locationId}`, {
      headers: this.getHeaders(token)
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL getLocation failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // List / Query Contacts in a Location
  public async getContacts(locationId: string, query?: string, limit = 20) {
    const token = this.getTokenForLocation(locationId);
    let url = `${this.baseUrl}/contacts/?locationId=${locationId}&limit=${limit}`;
    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }
    const response = await fetch(url, {
      headers: this.getHeaders(token)
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL getContacts failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Create or Upsert Contact
  public async upsertContact(locationId: string, contactData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    companyName?: string;
    tags?: string[];
    customFields?: Array<{ id: string; key?: string; field_value: any }>;
    source?: string;
  }) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/contacts/upsert`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify({
        locationId,
        ...contactData
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL upsertContact failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Get Custom Fields for a location
  public async getCustomFields(locationId: string) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/locations/${locationId}/customFields`, {
      headers: this.getHeaders(token)
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL getCustomFields failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Create Custom Field in a location
  public async createCustomField(locationId: string, field: {
    name: string;
    dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'DATE' | 'MONETARY' | 'RADIO' | 'CHECKBOX' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS';
    placeholder?: string;
    model?: string;
  }) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/locations/${locationId}/customFields`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify({
        ...field,
        model: field.model || 'contact'
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL createCustomField failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Get Location Tags
  public async getTags(locationId: string) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/locations/${locationId}/tags`, {
      headers: this.getHeaders(token)
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL getTags failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Create Tag
  public async createTag(locationId: string, name: string) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/locations/${locationId}/tags`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify({ name })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL createTag failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Get Pipelines for Opportunity management
  public async getPipelines(locationId: string) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/opportunities/pipelines?locationId=${locationId}`, {
      headers: this.getHeaders(token)
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL getPipelines failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Create Opportunity
  public async createOpportunity(locationId: string, opportunity: {
    pipelineId: string;
    pipelineStageId: string;
    name: string;
    contactId: string;
    monetaryValue?: number;
    status?: 'open' | 'won' | 'lost' | 'abandoned';
  }) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/opportunities/`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify({
        ...opportunity,
        locationId
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL createOpportunity failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Send Conversation Message (SMS/Email/LiveChat)
  public async sendMessage(locationId: string, message: {
    type: 'SMS' | 'Email' | 'Live_Chat' | 'WhatsApp';
    contactId: string;
    message: string;
    subject?: string;
    attachments?: string[];
  }) {
    const token = this.getTokenForLocation(locationId);
    const response = await fetch(`${this.baseUrl}/conversations/messages`, {
      method: 'POST',
      headers: this.getHeaders(token),
      body: JSON.stringify({
        ...message,
        locationId
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GHL sendMessage failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // Verify all 4 subaccounts & return health matrix
  public async auditAllSubaccounts() {
    const results = [];
    for (const sub of CONFIG.ghl.subaccounts) {
      try {
        const loc = await this.getLocation(sub.locationId);
        results.push({
          id: sub.id,
          name: sub.name,
          locationId: sub.locationId,
          status: 'connected',
          details: {
            businessName: loc?.location?.name || loc?.name || sub.name,
            email: loc?.location?.email || loc?.email,
            phone: loc?.location?.phone || loc?.phone,
            address: loc?.location?.address || loc?.address
          }
        });
      } catch (err: any) {
        results.push({
          id: sub.id,
          name: sub.name,
          locationId: sub.locationId,
          status: 'error',
          error: err.message
        });
      }
    }
    return results;
  }
}

export const ghlService = new GHLService();
