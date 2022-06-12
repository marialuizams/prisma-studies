import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "4049c66e-f915-43c5-919f-ca4712349b9d"
    },
    include: {
      modules: true
    }
  });

  console.log(result);
  // console.log(JSON.stringify(result));
}

main();