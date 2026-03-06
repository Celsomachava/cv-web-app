import { PaySuiteClient } from './client';
import { CreateRefundRequest, Refund, ApiResponse } from './types';

export class RefundService {
  constructor(private client: PaySuiteClient) {}

  async create(request: CreateRefundRequest): Promise<ApiResponse<Refund>> {
    this.validate(request);

    return this.client.request<Refund>('/refunds', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  private validate(request: CreateRefundRequest): void {
    if (request.amount < 0.01 || request.amount > 10000000) {
      throw new Error('Amount must be between 0.01 and 10,000,000');
    }
    if (!request.payment_id) {
      throw new Error('Payment ID is required');
    }
  }
}
