interface PaymentRequest {
  amount: number;
  reference: string;
  description: string;
  return_url: string;
  callback_url: string;
  method?: string;
}

interface PaymentResponse {
  checkout_url: string;
}

export async function createPaysuitePayment(data: PaymentRequest): Promise<PaymentResponse> {
  try {
    const response = await fetch('https://paysuite.tech/api/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PAYSUITE_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (response.status === 401) {
      console.error('Paysuite authentication failed');
      throw new Error('Payment service authentication failed. Please contact support.');
    }

    if (response.status === 422) {
      const error = await response.json();
      console.error('Paysuite validation error:', error);
      throw new Error('Invalid payment details. Please check your information.');
    }

    if (!response.ok) {
      const error = await response.json();
      console.error('Paysuite error:', error);
      throw new Error('Payment request failed. Please try again.');
    }

    const result = await response.json();
    return { checkout_url: result.checkout_url };
  } catch (error: any) {
    if (error.message.includes('fetch')) {
      console.error('Network error:', error);
      throw new Error('Network error. Please check your connection and try again.');
    }
    throw error;
  }
}
