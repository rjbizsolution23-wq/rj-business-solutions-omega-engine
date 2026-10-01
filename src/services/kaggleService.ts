import { CONFIG } from '../config/credentials';

export interface KaggleDatasetSummary {
  ref: string;
  title: string;
  size: number;
  lastUpdated: string;
  downloadCount: number;
  voteCount: number;
  usabilityRating: number;
}

export interface KaggleModelSummary {
  id: number;
  ref: string;
  title: string;
  ownerName: string;
  instanceCount: number;
}

export class KaggleService {
  private apiToken = CONFIG.dataScience.kaggle.apiToken;
  private baseUrl = CONFIG.dataScience.kaggle.baseUrl;

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  // 1. Search Datasets (e.g. credit score, financial risk, leads, B2B)
  public async searchDatasets(query = 'credit', page = 1): Promise<KaggleDatasetSummary[]> {
    const url = `${this.baseUrl}/datasets/list?search=${encodeURIComponent(query)}&page=${page}&sortBy=votes`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Kaggle searchDatasets failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 2. Search Models (e.g. Gemma, Llama, DeepSeek, Whisper)
  public async searchModels(query = 'gemma', page = 1): Promise<KaggleModelSummary[]> {
    const url = `${this.baseUrl}/models/list?search=${encodeURIComponent(query)}&page=${page}&sort=mostVotes`;
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Kaggle searchModels failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 3. List Kaggle Competitions
  public async listCompetitions(search?: string) {
    let url = `${this.baseUrl}/competitions/list?sortBy=latest`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    const response = await fetch(url, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Kaggle listCompetitions failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 4. Download Dataset Stream / Archive URL
  public async getDatasetDownloadUrl(ownerSlug: string, datasetSlug: string) {
    return `${this.baseUrl}/datasets/download/${ownerSlug}/${datasetSlug}`;
  }
}

export const kaggleService = new KaggleService();
