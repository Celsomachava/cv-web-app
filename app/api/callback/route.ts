import { NextRequest, NextResponse } from 'next/server';
import { PaySuiteSDK } from '@/lib/paysuite-sdk';
import { prisma } from '@/lib/prisma';

const paysuite = new PaySuiteSDK({
  apiToken: process.env.PAYSUITE_API_KEY!,
  webhookSecret: process.env.PAYSUITE_WEBHOOK_SECRET!,
});

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get('x-webhook-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
  }

  const result = await paysuite.webhooks.handle(
    payload,
    signature,
    async (webhook) => {
      if (webhook.event === 'payment.success') {
        await prisma.payment.updateMany({
          where: { reference: webhook.data.reference },
          data: {
            status: 'success',
            transactionId: webhook.data.transaction.id,
            updatedAt: new Date(),
          },
        });
      } else if (webhook.event === 'payment.failed') {
        await prisma.payment.updateMany({
          where: { reference: webhook.data.reference },
          data: {
            status: 'failed',
            updatedAt: new Date(),
          },
        });
      }
    }
  );

  return NextResponse.json(result);
}
