const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      username: 'john_doe',
      password: 'securepassword123',
      tasks: {
        create: [
          { name: 'Task 1', done: false },
          { name: 'Task 2', done: false },
          { name: 'Task 3', done: false }
        ]
      }
    }
  });

  console.log('User created with tasks:', user);
}

seed()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());