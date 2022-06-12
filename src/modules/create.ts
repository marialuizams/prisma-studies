import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "React Basics",
      description: "Learning React basics",
      courses: {
        create: {
          course: {
            connect: {
              id: "19d0d73e-d2c1-46d1-8e26-41b3d64d5de3"
            }
          }
        }
      }
    }
  });

  console.log(result);
}

main();