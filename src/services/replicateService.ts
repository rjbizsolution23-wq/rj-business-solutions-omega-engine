import { CONFIG } from '../config/credentials';

export class ReplicateService {
  private apiToken = CONFIG.ai.replicate.apiToken;
  private baseUrl = CONFIG.ai.replicate.baseUrl;

  public async generateImage(prompt: string, model = 'black-forest-labs/flux-schnell') {
    const response = await fetch(`${this.baseUrl}/models/${model}/predictions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiToken}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait'
      },
      body: JSON.stringify({
        input: {
          prompt: `RJ Business Solutions visual standard: ${prompt}, high tech, professional navy and electric blue theme, 8k resolution`,
          aspect_ratio: '16:9',
          output_format: 'webp'
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Replicate API Error (${response.status}): ${err}`);
    }

    const data = await response.json();
    return data;
  }
}

export const replicateService = new ReplicateService();
