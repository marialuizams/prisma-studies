import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: "Node.js Course",
          description: "Complete Node.js course",
          duration: 200,
          fk_id_teacher: "3941d097-ef31-44c4-9520-96d98752ec69"
        }
      },
      module: {
        create: {
          name: "PrismaIO",
          description: "Complete PrismaIO course",
        }
      }
    }
  });

  console.log(result);
}

main();