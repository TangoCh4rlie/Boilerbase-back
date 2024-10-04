import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.boilerplate.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Boilerplate',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerplate-back',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Boilerplate-front',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerplate-front',
    },
  });

  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      username: 'TangoCh4rlie',
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
