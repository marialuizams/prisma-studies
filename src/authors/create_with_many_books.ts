import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Jane Doe",
      books: {
        createMany: {
          data: [
            { name: "Book #1" },
            { name: "Book #2" }
          ]
        }
      }
    }
  });

  console.log(result);
}

main();