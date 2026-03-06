export interface PaySuiteConfig {
  apiToken: string;
  webhookSecret: string;
  baseUrl?: string;
  timeout?: number;
  maxRetries?: number;
}

export interface CreatePaymentRequest {
  amount: number;
  reference: string;
  method?: 'credit_card' | 'mpesa' | 'emola';
  description?: string;
  return_url?: string;
  callback_url?: string;
}

export interface Payment {
  id: string;
  amount: number;
  reference: string;
  status: 'pending' | 'paid' | 'failed' | 'cancelled';
  checkout_url?: string;
  transaction?: {
    id: string;
    status: string;
    transaction_id: string;
    paid_at: string;
  };
}

export interface CreatePayoutRequest {
  amount: number;
  description: string;
  currency: string;
  reference: string;
  beneficiary: {
    phone: string;
    holder: string;
  };
  method: 'mpesa' | 'emola' | 'mkesh' | 'bank' | 'bank_transfer';
}

export interface Payout {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  reference: string;
}

export interface CreateRefundRequest {
  payment_id: string;
  amount: number;
  reason: string;
}

export interface Refund {
  id: string;
  payment_id: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  reason: string;
}

export interface WebhookPayload {
  event: 'payment.success' | 'payment.failed';
  data: any;
  created_at: number;
  request_id: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
}
