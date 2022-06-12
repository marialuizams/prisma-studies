import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Node.js Course",
      description: "Complete 2022 Node.js course",
      duration: 210
    },
  });

  console.log(result);
}

main();