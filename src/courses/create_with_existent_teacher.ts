import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "React Native Course",
      description: "Complete 2022 React Native course",
      duration: 300,
      teacher: {
        connect: {
          id: "16334142-9729-4162-940d-8119c406ed5d"
        }
      }
    }
  });

  console.log(result);
}

main();