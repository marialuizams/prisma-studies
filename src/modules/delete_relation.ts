import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "aefea1ba-58fa-489b-a8d9-1e4beb59dd37"
    }
  });

  console.log(result);
}

main();