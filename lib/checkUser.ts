import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/db';

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || null,
      imageUrl: user.imageUrl ?? null,
      email: user.emailAddresses?.[0]?.emailAddress ?? null,
      username: user.username ?? user.id,
    },
  });

  return newUser;
};