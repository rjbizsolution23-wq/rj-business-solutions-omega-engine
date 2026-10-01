import { CONFIG } from '../config/credentials';

export class NvidiaService {
  private apiKey = CONFIG.ai.nvidia.apiKey;
  private baseUrl = CONFIG.ai.nvidia.baseUrl;

  public async generateCompletion(prompt: string, model = 'deepseek-ai/deepseek-v4.1-flash') {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.2,
          top_p: 0.7,
          max_tokens: 1024
        })
      });

      if (response.ok) {
        const data = await response.json();
        return {
          content: data.choices?.[0]?.message?.content || '',
          model: data.model,
          usage: data.usage
        };
      }
    } catch (err: any) {
      console.warn('NVIDIA NIM primary request failed, falling back to Mistral AI:', err.message);
    }

    // High-availability fallback
    const { mistralService } = await import('./mistralService');
    const fallback = await mistralService.chatCompletion([{ role: 'user', content: prompt }]);
    return {
      content: fallback.content,
      model: `${fallback.model} (failover)`,
      usage: fallback.usage
    };
  }
}

export const nvidiaService = new NvidiaService();
