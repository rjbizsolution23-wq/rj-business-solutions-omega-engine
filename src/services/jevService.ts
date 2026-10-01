import { CONFIG } from '../config/credentials';

export interface JevTaskRequest {
  prompt: string;
  context?: Record<string, any>;
  model?: string;
}

export interface JevTaskResponse {
  id?: string;
  result?: any;
  status?: string;
  message?: string;
  [key: string]: any;
}

export class JevService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.ai.jev.apiKey;
    this.baseUrl = CONFIG.ai.jev.baseUrl;
  }

  /**
   * Execute an automated task or reasoning workflow via Jev AI
   */
  async runTask(params: JevTaskRequest): Promise<JevTaskResponse> {
    const res = await fetch(`${this.baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        prompt: params.prompt,
        context: params.context || {},
        model: params.model || 'default'
      })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Jev API error (${res.status}): ${err}`);
    }

    return await res.json();
  }
}

export const jevService = new JevService();
