import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "19d0d73e-d2c1-46d1-8e26-41b3d64d5de3",
      fk_id_module: "4f5bbacb-9595-4af8-8a5a-4803dcdbe780"
    }
  });

  console.log(result);
}

main();