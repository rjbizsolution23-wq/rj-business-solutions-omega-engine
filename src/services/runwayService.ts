import { CONFIG } from '../config/credentials';

export class RunwayService {
  private apiKey = CONFIG.ai.runway.apiKey;
  private baseUrl = CONFIG.ai.runway.baseUrl;

  public async generateVideo(promptImageOrText: { promptText?: string; promptImage?: string }) {
    const response = await fetch(`${this.baseUrl}/image_to_video`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'X-Runway-Version': '2024-09-13',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gen3a_turbo',
        promptText: promptImageOrText.promptText || 'Cinematic smooth business technology motion graphics in deep blue and navy',
        promptImage: promptImageOrText.promptImage,
        duration: 5,
        ratio: '1280:768'
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Runway Gen-3 API Error (${response.status}): ${err}`);
    }

    return response.json();
  }
}

export const runwayService = new RunwayService();
