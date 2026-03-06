import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { paysuiteClient } from '@/lib/paysuite';
import { prisma } from '@/lib/prisma';

const FIXED_AMOUNT = 50;
const CURRENCY = 'MZN';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { provider, phone, cvId } = await request.json();

    if (!provider || !phone || !cvId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!['mpesa', 'emola', 'mkesh'].includes(provider)) {
      return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
    }

    const reference = `CV-${cvId}-${Date.now()}`;

    const paymentResponse = await paysuiteClient.initiatePayment({
      amount: FIXED_AMOUNT,
      currency: CURRENCY,
      provider: provider as 'mpesa' | 'emola' | 'mkesh',
      phone,
      reference,
    });

    await prisma.payment.create({
      data: {
        userId: session.user.id,
        cvId,
        transactionId: paymentResponse.transaction_id,
        amount: FIXED_AMOUNT,
        currency: CURRENCY,
        provider,
        phone,
        status: paymentResponse.status,
        reference,
      },
    });

    return NextResponse.json({
      transaction_id: paymentResponse.transaction_id,
      status: paymentResponse.status,
      message: paymentResponse.message,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Payment failed' }, { status: 500 });
  }
}
