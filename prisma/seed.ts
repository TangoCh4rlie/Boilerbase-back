import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { id: '50408224' },
    update: {},
    create: {
      id: '50408224',
      username: 'TangoCh4rlie',
      avatar: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      boilerplatesHistory: [1, 2, 3, 4],
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
      name: 'Boilerbase-back',
      githubName: 'Boilerbase-back',
      languages: ['lua', 'c'],
      defaultBranch: 'main',
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerbase-back',
      authorId: '50408224',
      usesCounter: 10,
      likesCounter: 5,
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      features: ['auth', 'database'],
      description:
        '<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" />\n' +
        '# TEST\n' +
        '<br />\n' +
        '\n' +
        '<div align="center"><strong>Start your next react project in seconds</strong></div>\n' +
        '<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>\n' +
        '\n' +
        '<br />\n' +
        '\n' +
        '<div align="center">\n' +
        '  <!-- Dependency Status -->\n' +
        '  <a href="https://david-dm.org/react-boilerplate/react-boilerplate">\n' +
        '    <img src="https://david-dm.org/react-boilerplate/react-boilerplate.svg" alt="Dependency Status" />\n' +
        '  </a>\n' +
        '  <!-- devDependency Status -->\n' +
        '  <a href="https://david-dm.org/react-boilerplate/react-boilerplate#info=devDependencies">\n' +
        '    <img src="https://david-dm.org/react-boilerplate/react-boilerplate/dev-status.svg" alt="devDependency Status" />\n' +
        '  </a>\n' +
        '  <!-- Build Status -->\n' +
        '  <a href="https://travis-ci.org/react-boilerplate/react-boilerplate">\n' +
        '    <img src="https://travis-ci.org/react-boilerplate/react-boilerplate.svg" alt="Build Status" />\n' +
        '  </a>\n' +
        '  <!-- Test Coverage -->\n' +
        '  <a href="https://coveralls.io/r/react-boilerplate/react-boilerplate">\n' +
        '    <img src="https://coveralls.io/repos/github/react-boilerplate/react-boilerplate/badge.svg" alt="Test Coverage" />\n' +
        '  </a>\n' +
        '  <a href="https://spectrum.chat/react-boilerplate">\n' +
        '  <img alt="Chat with us on Spectrum" src="https://withspectrum.github.io/badge/badge.svg" />\n' +
        '</a>\n' +
        '\n' +
        '</div>\n' +
        '<div align="center">\n' +
        '    <!-- Backers -->\n' +
        '  <a href="#backers">\n' +
        '    <img src="https://opencollective.com/react-boilerplate/backers/badge.svg" alt="Backers" />\n' +
        '  </a>\n' +
        '      <!-- Sponsors -->\n' +
        '  <a href="#sponsors">\n' +
        '    <img src="https://opencollective.com/react-boilerplate/sponsors/badge.svg" alt="Sponsors" />\n' +
        '  </a>\n' +
        '  <a href="http://thinkmill.com.au/?utm_source=github&utm_medium=badge&utm_campaign=react-boilerplate">\n' +
        '    <img alt="Supported by Thinkmill" src="https://thinkmill.github.io/badge/heart.svg" />\n' +
        '  </a>\n' +
        '</div>\n' +
        '\n' +
        '<br />\n' +
        '\n' +
        '<div align="center">\n' +
        '  <sub>Created by <a href="https://twitter.com/mxstbr">Max Stoiber</a> and maintained with ❤️ by an amazing <a href="https://github.com/orgs/react-boilerplate/people">team of developers</a>.</sub>\n' +
        '</div>',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Boilerbase-front',
      githubName: 'Boilerbase-front',
      defaultBranch: 'main',
      languages: ['javascript', 'typescript'],
      gitUrl: 'https://github.com/TangoCh4rlie/Boilerbase-front',
      authorId: '50408224',
      usesCounter: 20,
      likesCounter: 4,
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      features: ['auth', 'database'],
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'Encore un super projet',
      githubName: 'Case',
      defaultBranch: 'main',
      languages: ['svelte', 'csharp'],
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '138430231',
      usesCounter: 13,
      likesCounter: 1,
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      features: ['auth', 'database'],
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Clement ouvre l'éditeur OMG",
      githubName: 'Case',
      defaultBranch: 'main',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '143923412',
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      features: ['auth', 'database'],
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: 'Clement clode sa première ligne????',
      githubName: 'Case',
      defaultBranch: 'main',
      gitUrl: 'https://github.com/TangoCh4rlie/Case',
      authorId: '50408224',
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      features: ['auth', 'database'],
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: 'Amazing Project 1',
      githubName: 'ProjectOne',
      description: 'An amazing boilerplate for web development',
      gitUrl: 'https://github.com/user1/ProjectOne',
      languages: ['javascript', 'html5', 'css'],
      features: ['auth', 'database', 'CI/CD'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 120,
      usesCounter: 30,
      authorId: '50408224',
      defaultBranch: 'main',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      name: 'Data Science Kit',
      githubName: 'DSKit',
      description: 'Boilerplate for data science projects',
      gitUrl: 'https://github.com/user2/DSKit',
      languages: ['python', 'r'],
      features: ['data processing', 'visualization', 'machine learning'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 85,
      usesCounter: 40,
      authorId: '138430231',
      defaultBranch: 'main',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      name: 'Backend Pro',
      githubName: 'BackendPro',
      description: 'Backend boilerplate for REST APIs',
      gitUrl: 'https://github.com/user3/BackendPro',
      languages: ['javascript', 'typescript'],
      features: ['auth', 'database', 'API documentation'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 240,
      usesCounter: 110,
      authorId: '143923412',
      defaultBranch: 'develop',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      name: 'Frontend Deluxe',
      githubName: 'FrontendDeluxe',
      description: 'Frontend boilerplate with modern tools',
      gitUrl: 'https://github.com/user4/FrontendDeluxe',
      languages: ['javascript', 'vue', 'css'],
      features: ['routing', 'state management', 'responsive design'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 95,
      usesCounter: 55,
      authorId: '50408224',
      defaultBranch: 'main',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      name: 'E-commerce Starter',
      githubName: 'EcommerceStarter',
      description: 'A starter boilerplate for e-commerce websites',
      gitUrl: 'https://github.com/user5/EcommerceStarter',
      languages: ['php', 'javascript', 'html5'],
      features: ['auth', 'shopping cart', 'payment integration'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 180,
      usesCounter: 95,
      authorId: '138430231',
      defaultBranch: 'master',
    },
  });

  await prisma.boilerplate.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      name: 'Microservice Magic',
      githubName: 'MicroserviceMagic',
      description: 'Boilerplate for microservice architectures',
      gitUrl: 'https://github.com/user6/MicroserviceMagic',
      languages: ['java', 'docker', 'kubernetes'],
      features: ['containerization', 'service discovery', 'scalability'],
      logo: 'https://avatars.githubusercontent.com/u/50408224?v=4',
      likesCounter: 150,
      usesCounter: 65,
      authorId: '143923412',
      defaultBranch: 'main',
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
