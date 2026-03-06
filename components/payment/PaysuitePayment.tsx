'use client';

import { useState } from 'react';

interface PaysuitePaymentProps {
  onPaymentSuccess: () => void;
}

const PROVIDERS = [
  { id: 'mpesa', name: 'M-Pesa', logo: '📱' },
  { id: 'emola', name: 'e-Mola', logo: '💳' },
];

export default function PaysuitePayment({ onPaymentSuccess }: PaysuitePaymentProps) {
  const [method, setMethod] = useState<'mpesa' | 'emola'>('mpesa');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      const reference = `CV${Date.now()}`;
      
      const res = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 50,
          reference,
          description: 'CV Download Payment',
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      // Redirect to checkout
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h2>
        <p className="text-gray-600">Pay 50 MZN to download your CV</p>
      </div>

      <div className="bg-brand-lilac/10 border border-brand-lilac rounded-xl p-4 text-center">
        <div className="text-3xl font-bold text-brand-lilac">50 MZN</div>
        <div className="text-sm text-gray-600">One-time payment</div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Payment Method
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PROVIDERS.map((p) => (
            <button
              key={p.id}
              onClick={() => setMethod(p.id as 'mpesa' | 'emola')}
              className={`p-4 rounded-xl border-2 transition-all ${
                method === p.id
                  ? 'border-brand-lilac bg-brand-lilac/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-3xl mb-1">{p.logo}</div>
              <div className="text-sm font-medium">{p.name}</div>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm">{error}</div>
      )}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full py-3 bg-brand-lilac text-white rounded-xl font-medium hover:bg-brand-lilac/90 transition-colors disabled:opacity-50"
      >
        {loading ? 'Redirecting to checkout...' : 'Continue to Payment'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Secure payment powered by Paysuite
      </p>
    </div>
  );
}
