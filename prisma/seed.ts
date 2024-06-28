import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    { email: 'ysly305@gmail.com', name: 'Shailendra' },
    { email: 'yshailendra216@gmail.com', name: 'Shailendra Ydv' },
    { email: 'pydv1415@gmail.com', name: 'Prakash Kr.' },
    { email: 'nirdeshpokhrel29@gmail.com', name: 'Nirdesh Pokhrel' },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Database has been seeded.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });