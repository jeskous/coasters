// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //methods
  if (req.method === "DELETE") {
    const { cid } = req.query;
    console.log(cid);
    try {
      const test = await prisma.coaster.delete({
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
}
