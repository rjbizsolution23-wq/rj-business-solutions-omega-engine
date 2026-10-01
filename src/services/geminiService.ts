import { CONFIG } from '../config/credentials';

export interface GeminiGenerateRequest {
  prompt: string;
  model?: string;
  systemInstruction?: string;
  temperature?: number;
}

export interface GeminiGenerateResponse {
  text: string;
  candidates?: any[];
  usageMetadata?: any;
}

export class GeminiService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = CONFIG.ai.gemini.apiKey;
    this.baseUrl = CONFIG.ai.gemini.baseUrl;
  }

  /**
   * Generate text or structured outputs using Google Gemini API
   */
  async generateContent(params: GeminiGenerateRequest): Promise<GeminiGenerateResponse> {
    const model = params.model || 'gemini-1.5-flash';
    const url = `${this.baseUrl}/models/${model}:generateContent?key=${this.apiKey}`;

    const contents = [
      {
        role: 'user',
        parts: [{ text: params.prompt }]
      }
    ];

    const body: any = {
      contents,
      generationConfig: {
        temperature: params.temperature ?? 0.7
      }
    };

    if (params.systemInstruction) {
      body.systemInstruction = {
        parts: [{ text: params.systemInstruction }]
      };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Gemini API error (${res.status}): ${err}`);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      text,
      candidates: data.candidates,
      usageMetadata: data.usageMetadata
    };
  }
}

export const geminiService = new GeminiService();
