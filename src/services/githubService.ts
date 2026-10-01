import { CONFIG } from '../config/credentials';

export interface GitHubRepoSummary {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  default_branch: string;
}

export class GitHubService {
  private token = CONFIG.github.token;
  private owner = CONFIG.github.owner;
  private baseUrl = CONFIG.github.baseUrl;

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'RJ-Business-Solutions-Engine',
      'Content-Type': 'application/json'
    };
  }

  // 1. Get Authenticated User / Org
  public async getUser() {
    const response = await fetch(`${this.baseUrl}/user`, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub getUser failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 2. List Repositories
  public async listRepositories(page = 1, perPage = 20): Promise<GitHubRepoSummary[]> {
    const response = await fetch(
      `${this.baseUrl}/user/repos?sort=updated&direction=desc&page=${page}&per_page=${perPage}`,
      { headers: this.getHeaders() }
    );
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub listRepositories failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 3. Create a New Repository
  public async createRepository(name: string, description?: string, isPrivate = true) {
    const response = await fetch(`${this.baseUrl}/user/repos`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        name,
        description: description || 'RJ Business Solutions Cloudflare & Automation System',
        private: isPrivate,
        auto_init: true
      })
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub createRepository failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 4. Get Repository Details
  public async getRepoDetails(repoName: string) {
    const response = await fetch(`${this.baseUrl}/repos/${this.owner}/${repoName}`, {
      headers: this.getHeaders()
    });
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub getRepoDetails failed (${response.status}): ${err}`);
    }
    return response.json();
  }

  // 5. List Commits
  public async listCommits(repoName: string, limit = 10) {
    const response = await fetch(
      `${this.baseUrl}/repos/${this.owner}/${repoName}/commits?per_page=${limit}`,
      { headers: this.getHeaders() }
    );
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`GitHub listCommits failed (${response.status}): ${err}`);
    }
    return response.json();
  }
}

export const githubService = new GitHubService();
