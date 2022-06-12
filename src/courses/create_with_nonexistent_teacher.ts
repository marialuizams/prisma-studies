import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "ReactJS Course",
      description: "Complete 2022 ReactJS course",
      duration: 250,
      teacher: {
        create: {
          name: "Joe Public"
        }
      }
    },
  });

  console.log(result);
}

main();