import { CONFIG } from '../config/credentials';

export interface RtrvrAgentRequest {
  input: string;
  urls?: string[];
  verbosity?: 'final' | 'step' | 'verbose';
  schema?: Record<string, any>;
  session_id?: string;
}

export interface RtrvrAgentResponse {
  response?: string;
  error?: string;
  session_id?: string;
  steps?: any[];
  credits_remaining?: number;
  [key: string]: any;
}

export class RtrvrService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.webAgents.rtrvr.apiKey;
    this.baseUrl = CONFIG.webAgents.rtrvr.baseUrl;
  }

  /**
   * Run an autonomous web browsing agent via Rtrvr.ai
   * @param params Prompt input, target URLs, and response formatting
   */
  async runAgent(params: RtrvrAgentRequest): Promise<RtrvrAgentResponse> {
    const payload = {
      input: params.input,
      urls: params.urls && params.urls.length > 0 ? params.urls : undefined,
      response: {
        verbosity: params.verbosity || 'final',
        ...(params.schema ? { schema: params.schema } : {})
      },
      ...(params.session_id ? { session_id: params.session_id } : {})
    };

    const res = await fetch(`${this.baseUrl}/agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Rtrvr API error (${res.status}): ${errorText}`);
    }

    return await res.json();
  }

  /**
   * Quick utility to extract structured info from any target URL
   */
  async extractFromUrl(url: string, extractionPrompt: string): Promise<RtrvrAgentResponse> {
    return this.runAgent({
      input: extractionPrompt,
      urls: [url],
      verbosity: 'final'
    });
  }
}

export const rtrvrService = new RtrvrService();
