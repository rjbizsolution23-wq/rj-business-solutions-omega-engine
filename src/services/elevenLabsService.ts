import { CONFIG } from '../config/credentials';

export class ElevenLabsService {
  private apiKey = CONFIG.ai.elevenLabs.apiKey;
  private baseUrl = CONFIG.ai.elevenLabs.baseUrl;

  // Synthesize Text to Speech Audio Buffer
  public async textToSpeech(text: string, voiceId = CONFIG.ai.elevenLabs.defaultVoiceId): Promise<ArrayBuffer> {
    const response = await fetch(`${this.baseUrl}/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': this.apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`ElevenLabs TTS Error (${response.status}): ${err}`);
    }

    return response.arrayBuffer();
  }

  // Get Available Voices
  public async getVoices() {
    const response = await fetch(`${this.baseUrl}/voices`, {
      headers: {
        'xi-api-key': this.apiKey
      }
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`ElevenLabs Voices Error (${response.status}): ${err}`);
    }

    return response.json();
  }

  // Get User Subscription / Quota Info
  public async getUserInfo() {
    const response = await fetch(`${this.baseUrl}/user`, {
      headers: {
        'xi-api-key': this.apiKey
      }
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`ElevenLabs User Info Error (${response.status}): ${err}`);
    }

    return response.json();
  }
}

export const elevenLabsService = new ElevenLabsService();
