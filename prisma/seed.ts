import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { id: '123049213' },
    update: {},
    create: {
      id: '123049213',
      username: 'TangoCh4rlie',
      avatar: 'https://avatars.githubusercontent.com/u/50408224?v=4',
    },
  });

  await prisma.user.upsert({
    where: { id: '138430231' },
    update: {},
    create: {
      id: '138430231',
      username: 'Celment',
      avatar: 'https://avatars.githubusercontent.com/u/39115651?v=4',
    },
  });

  await prisma.user.upsert({
    where: { id: '143923412' },
    update: {},
    create: {
      id: '143923412',
      username: 'Perdo',
      avatar: 'https://avatars.githubusercontent.com/u/32818368?v=4',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Boilerplate-back',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerplate-back',
      authorId: '123049213',
      usesCounter: 10,
      likesCounter: 5,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Boilerplate-front',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerplate-front',
      authorId: '138430231',
      usesCounter: 20,
      likesCounter: 4,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Encore un super projet',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '138430231',
      usesCounter: 13,
      likesCounter: 1,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Clement ouvre l'éditeur OMG",
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '143923412',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: 'Clement clode sa première ligne????',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '123049213',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
