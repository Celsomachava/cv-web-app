# CV Builder Setup Instructions

## Features Added

✅ **Preview Step**: Review CV information before payment
✅ **Payment Step**: Secure payment with Stripe (100 MZN)
✅ **Progress Navigation**: Visual step indicator with icons
✅ **Responsive Design**: Mobile-friendly step navigation

## Stripe Integration Setup

1. **Get Stripe Keys**:
   - Sign up at [stripe.com](https://stripe.com)
   - Get your publishable and secret keys from the dashboard

2. **Update Environment Variables**:
   ```bash
   # Update .env.local with your actual Stripe keys
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
   ```

3. **Test Payment**:
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date (e.g., 12/25)
   - Any 3-digit CVV (e.g., 123)

## Running the Application

```bash
cd cv-builder
npm install
npm run dev
```

## New Steps Added

1. **Template Selection** 🎨
2. **Personal Info** 👤
3. **Summary** 📝
4. **Experience** 💼
5. **Education** 🎓
6. **Skills** ⚡
7. **Languages** 🌍
8. **Certifications** 🏆
9. **Preview** 👁️ (NEW)
10. **Payment** 💳 (NEW)

## Payment Flow

1. User completes all CV information
2. Preview step shows summary of entered data
3. Payment step requires 100 MZN payment
4. After successful payment, PDF download is enabled
5. Professional PDF generated without watermarks

## Currency Support

- **Mozambican Metical (MZN)**: 100 MZN per CV download
- Stripe handles currency conversion automatically
- Secure payment processing with SSL encryption