import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createPaysuitePayment } from '@/lib/utils/paysuitePayment';

global.fetch = vi.fn();

describe('createPaysuitePayment', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.PAYSUITE_API_KEY = 'test-api-key';
  });

  it('should return checkout_url on success', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ checkout_url: 'https://checkout.paysuite.tech/abc123' }),
    });

    const result = await createPaysuitePayment({
      amount: 50,
      reference: 'CV-123',
      description: 'Test payment',
      return_url: 'http://localhost:3000/success',
      callback_url: 'http://localhost:3000/api/callback',
    });

    expect(result.checkout_url).toBe('https://checkout.paysuite.tech/abc123');
    expect(global.fetch).toHaveBeenCalledWith(
      'https://paysuite.tech/api/v1/payments',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Authorization': 'Bearer test-api-key',
        }),
      })
    );
  });

  it('should throw error on 401 authentication failure', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ message: 'Unauthorized' }),
    });

    await expect(createPaysuitePayment({
      amount: 50,
      reference: 'CV-123',
      description: 'Test',
      return_url: 'http://localhost:3000/success',
      callback_url: 'http://localhost:3000/api/callback',
    })).rejects.toThrow('Payment service authentication failed');
  });

  it('should throw error on 422 validation failure', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 422,
      json: async () => ({ errors: { amount: 'Invalid amount' } }),
    });

    await expect(createPaysuitePayment({
      amount: -10,
      reference: 'CV-123',
      description: 'Test',
      return_url: 'http://localhost:3000/success',
      callback_url: 'http://localhost:3000/api/callback',
    })).rejects.toThrow('Invalid payment details');
  });

  it('should handle network errors', async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error('fetch failed'));

    await expect(createPaysuitePayment({
      amount: 50,
      reference: 'CV-123',
      description: 'Test',
      return_url: 'http://localhost:3000/success',
      callback_url: 'http://localhost:3000/api/callback',
    })).rejects.toThrow('Network error');
  });

  it('should include optional method parameter', async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ checkout_url: 'https://checkout.paysuite.tech/abc123' }),
    });

    await createPaysuitePayment({
      amount: 50,
      reference: 'CV-123',
      description: 'Test',
      return_url: 'http://localhost:3000/success',
      callback_url: 'http://localhost:3000/api/callback',
      method: 'mpesa',
    });

    const callBody = JSON.parse((global.fetch as any).mock.calls[0][1].body);
    expect(callBody.method).toBe('mpesa');
  });
});
