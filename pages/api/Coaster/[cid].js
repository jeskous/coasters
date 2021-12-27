// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const { cid } = req.query;

  //methods
  if (req.method === "DELETE") {
    try {
      await prisma.coaster.delete({
        where: { id: parseInt(cid) },
      });
      res.send("success");
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    } finally {
      prisma.$disconnect();
    }
  }
  if (req.method === "PUT") {
    try {
      await prisma.coaster.update({
        where: { id: parseInt(cid) },
        data: { name: req.body.name },
      });
      res.send("success");
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    } finally {
      prisma.$disconnect();
    }
  }
}
