import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "96cb9289-275b-47bf-a10d-be28a8d0d9a5"
    },
    data: {
      duration: 225
    }
  });

  console.log(result);
}

main();