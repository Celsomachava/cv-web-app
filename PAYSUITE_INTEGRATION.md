# Paysuite Payment Integration

## Overview
Integrated Paysuite payment gateway supporting M-Pesa, e-Mola, and mKesh for CV downloads.

## Configuration

### 1. Environment Variables (.env)
```env
PAYSUITE_CLIENT_ID="your_client_id"
PAYSUITE_CLIENT_SECRET="your_client_secret"
PAYSUITE_WEBHOOK_SECRET="your_webhook_secret"
```

### 2. Payment Settings
- **Amount**: 50 MZN (Fixed, non-editable)
- **Currency**: MZN
- **Providers**: M-Pesa, e-Mola, mKesh

## Features Implemented

✅ **Token-based Authentication**
- Automatic token generation and refresh
- Secure server-side token storage
- Token expiry handling

✅ **Payment Processing**
- Fixed amount (50 MZN)
- Provider selection (M-Pesa, e-Mola, mKesh)
- Phone number validation
- Server-side validation

✅ **Status Handling**
- Pending: Waiting for user confirmation
- Success: Payment completed, CV unlocked
- Failed: Payment rejected

✅ **Webhook Integration**
- Signature verification
- Automatic status updates
- CV unlock on success

✅ **Security**
- No token exposure on frontend
- Server-side payment processing
- HMAC signature verification
- Protected API endpoints

## API Endpoints

### POST /api/payments
Initiate payment
```json
{
  "provider": "mpesa|emola|mkesh",
  "phone": "84XXXXXXX",
  "cvId": "cv_id"
}
```

### GET /api/payments/status?transactionId=xxx
Check payment status

### POST /api/payments/webhook
Receive payment notifications from Paysuite

## Database Schema

### Payment Table
- transactionId (unique)
- userId, cvId
- amount, currency
- provider, phone
- status, reference
- timestamps

### CV Table
- isPaid (boolean) - Unlocks download

## Usage Flow

1. User completes CV
2. Clicks "Download CV"
3. Selects payment provider (M-Pesa/e-Mola/mKesh)
4. Enters phone number
5. Clicks "Pay 50 MZN"
6. Backend initiates payment via Paysuite
7. User receives USSD prompt on phone
8. User confirms payment
9. Webhook updates status
10. CV download unlocked

## Testing

1. Update `.env` with Paysuite credentials
2. Run database migration:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. Start server: `npm run dev`
4. Test payment flow

## Webhook URL
Configure in Paysuite dashboard:
```
https://yourdomain.com/api/payments/webhook
```

## Error Handling
- Invalid provider → 400 error
- Missing phone → Validation error
- Payment failure → User notified
- Network issues → Retry mechanism
