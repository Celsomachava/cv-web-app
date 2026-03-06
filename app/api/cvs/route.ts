import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cvs = await prisma.cV.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json({ cvs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch CVs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, data, templateId, themeColor } = await request.json();

    const cv = await prisma.cV.create({
      data: {
        userId: session.user.id,
        title,
        data,
        templateId,
        themeColor,
      },
    });

    return NextResponse.json({ cv });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save CV' }, { status: 500 });
  }
}
