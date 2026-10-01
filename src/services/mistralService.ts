import { CONFIG } from '../config/credentials';

export class MistralService {
  private apiKey = CONFIG.ai.mistral.apiKey;
  private baseUrl = CONFIG.ai.mistral.baseUrl;

  public async chatCompletion(messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>, options?: {
    model?: string;
    temperature?: number;
    responseFormat?: { type: 'json_object' };
  }) {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        model: options?.model || 'open-mistral-7b',
        messages,
        temperature: options?.temperature ?? 0.3,
        response_format: options?.responseFormat
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Mistral API Error (${response.status}): ${err}`);
    }

    const data = await response.json();
    return {
      content: data.choices?.[0]?.message?.content || '',
      model: data.model,
      usage: data.usage
    };
  }

  // Qualify and Score Lead specifically for RJ Business Solutions / FCRA
  public async scoreAndEnrichLead(leadData: any) {
    const systemPrompt = `You are the RJ Business Solutions AI Lead Intelligence Architect.
Analyze the inbound prospect and return a structured JSON response matching this schema:
{
  "score": number (1-100),
  "intentCategory": "credit_tech" | "business_automation" | "lead_systems" | "ministry" | "general_inquiry",
  "summary": string (1-2 sentences),
  "suggestedSubaccount": "rj-business-solutions" | "smart-fcra" | "eugene" | "contracting-preacher",
  "recommendedTags": string[],
  "personalizedVoiceScript": string (Conversational, authoritative, compliant with CROA - no score increase promises)
}`;

    const response = await this.chatCompletion([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Prospect details: ${JSON.stringify(leadData)}` }
    ], {
      responseFormat: { type: 'json_object' }
    });

    try {
      return JSON.parse(response.content);
    } catch {
      return { raw: response.content };
    }
  }
}

export const mistralService = new MistralService();
