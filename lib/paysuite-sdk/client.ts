import { PaySuiteConfig, ApiResponse } from './types';

export class PaySuiteClient {
  private config: Required<PaySuiteConfig>;

  constructor(config: PaySuiteConfig) {
    this.config = {
      baseUrl: 'https://paysuite.tech/api/v1',
      timeout: 30000,
      maxRetries: 3,
      ...config,
    };
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.config.baseUrl}${endpoint}`;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            'Authorization': `Bearer ${this.config.apiToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers,
          },
          signal: AbortSignal.timeout(this.config.timeout),
        });

        const data = await response.json();

        if (!response.ok) {
          this.logError(response.status, data.message, endpoint);
          
          if (response.status === 429 && attempt < this.config.maxRetries) {
            await this.delay(Math.pow(2, attempt) * 1000);
            continue;
          }

          return { status: 'error', message: data.message || 'Request failed' };
        }

        this.logSuccess(endpoint, response.status);
        return data;
      } catch (error: any) {
        lastError = error;
        if (attempt < this.config.maxRetries) {
          await this.delay(Math.pow(2, attempt) * 1000);
        }
      }
    }

    this.logError(500, lastError?.message || 'Network error', endpoint);
    return { status: 'error', message: 'Network error after retries' };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private logSuccess(endpoint: string, status: number): void {
    console.log(`[PaySuite] ${endpoint} - ${status}`);
  }

  private logError(status: number, message: string, endpoint: string): void {
    console.error(`[PaySuite] ${endpoint} - ${status}: ${message}`);
  }
}
