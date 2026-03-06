import { NextRequest, NextResponse } from 'next/server';
import { PaySuiteSDK } from '@/lib/paysuite-sdk';

const paysuite = new PaySuiteSDK({
  apiToken: process.env.PAYSUITE_API_KEY!,
  webhookSecret: process.env.PAYSUITE_WEBHOOK_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { amount, reference, description } = await request.json();

    if (!amount || !reference) {
      return NextResponse.json({ error: 'Amount and reference are required' }, { status: 400 });
    }

    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

    const result = await paysuite.payments.create({
      amount,
      reference,
      description: description || 'CV Download Payment',
      return_url: `${baseUrl}/payment/success`,
      callback_url: `${baseUrl}/api/callback`,
    });

    if (result.status === 'error') {
      return NextResponse.json({ error: result.message }, { status: 400 });
    }

    return NextResponse.json({ checkout_url: result.data!.checkout_url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
