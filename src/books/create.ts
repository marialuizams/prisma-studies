import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Clean Architecture",
      author_id: "62e952b4-97ea-4bd9-8581-929c7a4d0dee"
    }
  });

  console.log(result);
}

main();