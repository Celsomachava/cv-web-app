const PAYSUITE_API_URL = 'https://api.paysuite.co.mz';

interface PaysuiteTokenResponse {
  access_token: string;
  expires_in: number;
}

interface PaymentRequest {
  amount: number;
  currency: string;
  provider: 'mpesa' | 'emola' | 'mkesh';
  phone: string;
  reference: string;
}

interface PaymentResponse {
  transaction_id: string;
  status: 'pending' | 'success' | 'failed';
  message: string;
}

class PaysuiteClient {
  private token: string | null = null;
  private tokenExpiry: number = 0;

  private async getToken(): Promise<string> {
    if (this.token && Date.now() < this.tokenExpiry) {
      return this.token;
    }

    const response = await fetch(`${PAYSUITE_API_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.PAYSUITE_CLIENT_ID,
        client_secret: process.env.PAYSUITE_CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get Paysuite token');
    }

    const data: PaysuiteTokenResponse = await response.json();
    this.token = data.access_token;
    this.tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000;

    return this.token;
  }

  async initiatePayment(request: PaymentRequest): Promise<PaymentResponse> {
    const token = await this.getToken();

    const response = await fetch(`${PAYSUITE_API_URL}/payments/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: request.amount,
        currency: request.currency,
        provider: request.provider,
        phone: request.phone,
        reference: request.reference,
      }),
    });

    if (!response.ok) {
      throw new Error('Payment initiation failed');
    }

    return await response.json();
  }

  async checkPaymentStatus(transactionId: string): Promise<PaymentResponse> {
    const token = await this.getToken();

    const response = await fetch(`${PAYSUITE_API_URL}/payments/${transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to check payment status');
    }

    return await response.json();
  }
}

export const paysuiteClient = new PaysuiteClient();
