# PaySuite SDK - Production-Ready Integration

## Installation

```typescript
import { PaySuiteSDK } from '@/lib/paysuite-sdk';
```

## Configuration

```typescript
const paysuite = new PaySuiteSDK({
  apiToken: process.env.PAYSUITE_API_KEY!,
  webhookSecret: process.env.PAYSUITE_WEBHOOK_SECRET!,
  baseUrl: 'https://paysuite.tech/api/v1', // optional
  timeout: 30000, // optional, default 30s
  maxRetries: 3, // optional, default 3
});
```

## Payment Operations

### Create Payment

```typescript
const result = await paysuite.payments.create({
  amount: 100.50,
  reference: 'INV2024001',
  method: 'mpesa',
  description: 'CV Download Payment',
  return_url: 'https://yoursite.com/success',
  callback_url: 'https://yoursite.com/api/callback',
});

if (result.status === 'success') {
  // Redirect user to checkout
  window.location.href = result.data.checkout_url;
}
```

### Get Payment Status

```typescript
const payment = await paysuite.payments.get('550e8400-e29b-41d4-a716-446655440000');

if (payment.status === 'success') {
  console.log(payment.data.status); // 'paid', 'pending', 'failed'
}
```

## Payout Operations

### Create Payout

```typescript
const payout = await paysuite.payouts.create({
  amount: 500.00,
  description: 'Withdrawal',
  currency: 'MZN',
  reference: 'PO123ABC456',
  beneficiary: {
    phone: '841234567',
    holder: 'John Doe',
  },
  method: 'mpesa',
});
```

## Refund Operations

### Create Refund

```typescript
const refund = await paysuite.refunds.create({
  payment_id: '550e8400-e29b-41d4-a716-446655440000',
  amount: 50.00,
  reason: 'Customer requested refund',
});
```

## Webhook Handling

### Next.js API Route

```typescript
// app/api/paysuite-webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PaySuiteSDK } from '@/lib/paysuite-sdk';

const paysuite = new PaySuiteSDK({
  apiToken: process.env.PAYSUITE_API_KEY!,
  webhookSecret: process.env.PAYSUITE_WEBHOOK_SECRET!,
});

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get('x-webhook-signature')!;

  const result = await paysuite.webhooks.handle(
    payload,
    signature,
    async (webhook) => {
      if (webhook.event === 'payment.success') {
        // Update database
        await updatePaymentStatus(webhook.data.id, 'paid');
        console.log('Payment successful:', webhook.data.reference);
      } else if (webhook.event === 'payment.failed') {
        await updatePaymentStatus(webhook.data.id, 'failed');
        console.log('Payment failed:', webhook.data.error);
      }
    }
  );

  return NextResponse.json(result);
}
```

## Features

✅ **Automatic Retries**: 3 attempts with exponential backoff  
✅ **Rate Limit Handling**: Automatic retry on 429 errors  
✅ **Webhook Idempotency**: Prevents duplicate processing  
✅ **Signature Verification**: HMAC SHA256 validation  
✅ **Structured Logging**: All requests/errors logged  
✅ **Type Safety**: Full TypeScript support  
✅ **Request Validation**: Input validation before API calls  
✅ **Timeout Protection**: 30s default timeout  

## Error Handling

```typescript
try {
  const payment = await paysuite.payments.create({
    amount: 100,
    reference: 'INV001',
  });

  if (payment.status === 'error') {
    console.error('Payment failed:', payment.message);
  }
} catch (error) {
  console.error('Validation error:', error.message);
}
```

## API Response Format

### Success

```typescript
{
  status: 'success',
  data: {
    id: '550e8400-e29b-41d4-a716-446655440000',
    amount: 100.50,
    reference: 'INV2024001',
    status: 'pending',
    checkout_url: 'https://paysuite.tech/checkout/...'
  }
}
```

### Error

```typescript
{
  status: 'error',
  message: 'Invalid API token'
}
```

## Webhook Events

### payment.success

```json
{
  "event": "payment.success",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": 100.50,
    "reference": "INV2024001",
    "transaction": {
      "id": "tr_123456",
      "method": "mpesa",
      "paid_at": "2024-02-10T10:15:00Z"
    }
  },
  "created_at": 1708235285,
  "request_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

### payment.failed

```json
{
  "event": "payment.failed",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": 100.50,
    "reference": "INV2024001",
    "error": "Insufficient funds"
  },
  "created_at": 1708235285,
  "request_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

## Environment Variables

```env
PAYSUITE_API_KEY=your_api_token_here
PAYSUITE_WEBHOOK_SECRET=your_webhook_secret_here
```

## Architecture

```
lib/paysuite-sdk/
├── index.ts              # Main SDK entry
├── types.ts              # TypeScript interfaces
├── client.ts             # HTTP client with retries
├── payment.service.ts    # Payment operations
├── payout.service.ts     # Payout operations
├── refund.service.ts     # Refund operations
└── webhook.handler.ts    # Webhook processing
```

## Production Checklist

- [x] Clean architecture (service layer)
- [x] Automatic retry logic
- [x] Rate limit handling
- [x] Webhook signature verification
- [x] Idempotent webhook processing
- [x] Request validation
- [x] Structured logging
- [x] Error handling
- [x] Type safety
- [x] Timeout protection
