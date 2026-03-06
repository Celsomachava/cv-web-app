import { PaySuiteClient } from './client';
import { CreatePaymentRequest, Payment, ApiResponse } from './types';

export class PaymentService {
  constructor(private client: PaySuiteClient) {}

  async create(request: CreatePaymentRequest): Promise<ApiResponse<Payment>> {
    this.validate(request);

    return this.client.request<Payment>('/payments', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async get(id: string): Promise<ApiResponse<Payment>> {
    return this.client.request<Payment>(`/payments/${id}`, {
      method: 'GET',
    });
  }

  private validate(request: CreatePaymentRequest): void {
    if (!request.amount || request.amount <= 0) {
      throw new Error('Amount must be greater than 0');
    }
    if (!request.reference) {
      throw new Error('Reference is required');
    }
    if (request.method && !['credit_card', 'mpesa', 'emola'].includes(request.method)) {
      throw new Error('Invalid payment method');
    }
  }
}
