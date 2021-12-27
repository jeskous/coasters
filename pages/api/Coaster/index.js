// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //methods
  if (req.method === "POST") {
    try {
      await prisma.coaster.create({ data: req.body });
      res.send("success");
    } catch (e) {
      res.status(400).send(e);
    } finally {
      prisma.$disconnect();
    }
  }
  if (req.method === "DELETE") {
    console.log("DELETE");
    try {
      await prisma.coaster.delete({ where: { id: req.body } });
    } catch (e) {
      res.status(400).send(e);
    } finally {
      prisma.$disconnect();
    }
  }
}
