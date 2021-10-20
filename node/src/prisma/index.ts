import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

prismaClient
  .$connect()
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(() => {
    console.log("Unable to connect to database");
  });

export default prismaClient;
