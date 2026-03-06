import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { paysuiteClient } from '@/lib/paysuite';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const transactionId = searchParams.get('transactionId');

    if (!transactionId) {
      return NextResponse.json({ error: 'Transaction ID required' }, { status: 400 });
    }

    const statusResponse = await paysuiteClient.checkPaymentStatus(transactionId);

    await prisma.payment.update({
      where: { transactionId },
      data: { status: statusResponse.status },
    });

    if (statusResponse.status === 'success') {
      const payment = await prisma.payment.findUnique({
        where: { transactionId },
      });

      if (payment) {
        await prisma.cV.update({
          where: { id: payment.cvId },
          data: { isPaid: true },
        });
      }
    }

    return NextResponse.json({
      status: statusResponse.status,
      message: statusResponse.message,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Status check failed' }, { status: 500 });
  }
}
