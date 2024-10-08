import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const hashedPassword = await bcrypt.hash('password1234', roundsOfHashing);

  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      username: 'TangoCh4rlie',
      password: hashedPassword,
      avatar: 'https://avatars.githubusercontent.com/u/50408224?v=4',
    },
  });
  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      username: 'Celment',
      password: hashedPassword,
      avatar: 'https://avatars.githubusercontent.com/u/39115651?v=4',
    },
  });
  await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      username: 'Perdo',
      password: hashedPassword,
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
      authorId: 1,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Boilerplate-front',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerplate-front',
      authorId: 2,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Encore un super projet',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: 2,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Clement ouvre l'éditeur OMG",
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: 3,
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: 'Clement clode sa première ligne????',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: 1,
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
