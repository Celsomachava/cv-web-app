import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { transaction_id, status, signature } = body;

    const expectedSignature = require('crypto')
      .createHmac('sha256', process.env.PAYSUITE_WEBHOOK_SECRET || '')
      .update(JSON.stringify({ transaction_id, status }))
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const payment = await prisma.payment.update({
      where: { transactionId: transaction_id },
      data: { status },
    });

    if (status === 'success') {
      await prisma.cV.update({
        where: { id: payment.cvId },
        data: { isPaid: true },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
