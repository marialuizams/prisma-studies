import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Another Course",
      description: "This is another course",
      duration: 210,
      fk_id_teacher: "1b7fa874-22a1-4334-a08f-b085ad332e5a"
    },
  });

  console.log(result);
}

main();