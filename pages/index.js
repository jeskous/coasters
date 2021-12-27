import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";
import Button from "../src/components/Button";
import CoasterList from "../src/components/CoasterComps/CoasterList";
import Header from "../src/components/Header/Header";
import { useCoaster } from "../src/contexts/coasterContext";

export default function Home({ coasters }) {
  const { setCoasters } = useCoaster();

  useEffect(() => {
    if (coasters) {
      setCoasters(coasters);
    }
  }, [coasters, setCoasters]);

  return (
    <>
      <Header />
      <div className="mt-5">
        <div id="buttonarea" className="ml-10">
          <Button title="Bierdeckel Hinzufügen" />
        </div>
        <div id="coasterarea" className="ml-10 mr-10">
          <CoasterList coasters />
        </div>
      </div>
    </>
  );
}

//fetch coasters from database
export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const coasters = await prisma.coasterDrinks.findMany();

  prisma.$disconnect();

  return {
    props: { coasters }, // will be passed to the page component as props
  };
}
