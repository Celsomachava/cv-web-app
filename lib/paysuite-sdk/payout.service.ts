import { PaySuiteClient } from './client';
import { CreatePayoutRequest, Payout, ApiResponse } from './types';

export class PayoutService {
  constructor(private client: PaySuiteClient) {}

  async create(request: CreatePayoutRequest): Promise<ApiResponse<Payout>> {
    this.validate(request);

    return this.client.request<Payout>('/payouts', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  private validate(request: CreatePayoutRequest): void {
    if (request.amount < 10 || request.amount > 1000000) {
      throw new Error('Amount must be between 10 and 1,000,000');
    }
    if (request.currency !== 'MZN') {
      throw new Error('Currency must be MZN');
    }
    if (!request.beneficiary.phone || !request.beneficiary.holder) {
      throw new Error('Beneficiary phone and holder are required');
    }
  }
}
