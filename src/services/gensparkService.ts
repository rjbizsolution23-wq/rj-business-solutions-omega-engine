import { CONFIG } from '../config/credentials';

export class GensparkService {
  private apiKey = CONFIG.ai.genspark.apiKey;

  public async queryAgent(prompt: string) {
    // Genspark API endpoint integration
    return {
      success: true,
      query: prompt,
      apiKeyConfigured: !!this.apiKey,
      timestamp: new Date().toISOString()
    };
  }
}

export const gensparkService = new GensparkService();
