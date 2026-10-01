import { CONFIG } from '../config/credentials';

export interface HFModelSummary {
  id: string;
  author: string;
  downloads: number;
  likes: number;
  pipeline_tag?: string;
  private: boolean;
}

export interface HFDatasetSummary {
  id: string;
  author: string;
  downloads: number;
  likes: number;
  private: boolean;
}

export interface HFSpaceSummary {
  id: string;
  author: string;
  likes: number;
  sdk?: string;
  hardware?: string;
}

export class HuggingFaceService {
  private apiToken = CONFIG.ai.huggingface.apiToken;
  private baseUrl = CONFIG.ai.huggingface.baseUrl;
  private inferenceUrl = CONFIG.ai.huggingface.inferenceUrl;

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    };
  }

  // 1. Get Authenticated User Identity
  public async getWhoAmI() {
    const response = await fetch('https://huggingface.co/api/whoami-v2', {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face whoami failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 2. Search Models (e.g. credit, finbert, embeddings, reasoning)
  public async searchModels(query = 'credit', limit = 20): Promise<HFModelSummary[]> {
    const url = `${this.baseUrl}/models?search=${encodeURIComponent(query)}&limit=${limit}&sort=downloads&direction=-1`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face searchModels failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 3. Search Datasets (e.g. credit scoring, fraud detection, marketing)
  public async searchDatasets(query = 'credit', limit = 20): Promise<HFDatasetSummary[]> {
    const url = `${this.baseUrl}/datasets?search=${encodeURIComponent(query)}&limit=${limit}&sort=downloads&direction=-1`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face searchDatasets failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 4. Search Spaces & ZeroGPU endpoints
  public async searchSpaces(query = 'llm', limit = 20): Promise<HFSpaceSummary[]> {
    const url = `${this.baseUrl}/spaces?search=${encodeURIComponent(query)}&limit=${limit}&sort=likes&direction=-1`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face searchSpaces failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 5. Query Model Details & Card
  public async getModelDetails(modelId: string) {
    const url = `${this.baseUrl}/models/${modelId}`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face getModelDetails failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 6. Direct Inference API Request
  public async runInference(modelId: string, inputs: any, parameters?: any) {
    const url = `${this.inferenceUrl}/${modelId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        inputs,
        parameters: parameters || {}
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Hugging Face runInference failed (${response.status}): ${err}`);
    }
    return response.json();
  }
}

export const huggingfaceService = new HuggingFaceService();
