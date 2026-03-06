import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, phone, image } = await request.json();

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: { name, phone, image },
    });

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, phone: user.phone, image: user.image } });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
