import { CONFIG } from '../config/credentials';

export class Base44Service {
  private apiToken = CONFIG.ai.base44.apiToken;
  private baseUrl = CONFIG.ai.base44.baseUrl;

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    };
  }

  // Create new conversation
  public async createConversation() {
    const response = await fetch(`${this.baseUrl}/conversations`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({})
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Base44 createConversation failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // Send message to conversation
  public async sendMessage(conversationId: string, content: string, fileUrls: string[] = []) {
    const response = await fetch(`${this.baseUrl}/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        role: 'user',
        content,
        file_urls: fileUrls
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Base44 sendMessage failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // Get conversation history
  public async getConversation(conversationId: string) {
    const response = await fetch(`${this.baseUrl}/conversations/${conversationId}`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Base44 getConversation failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // List conversations
  public async listConversations() {
    const response = await fetch(`${this.baseUrl}/conversations`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Base44 listConversations failed (${response.status}): ${err}`);
    }

    return response.json();
  }

  // List memory
  public async listMemory() {
    const response = await fetch(`${this.baseUrl}/memory`, {
      headers: this.getHeaders()
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Base44 listMemory failed (${response.status}): ${err}`);
    }

    return response.json();
  }
}

export const base44Service = new Base44Service();
