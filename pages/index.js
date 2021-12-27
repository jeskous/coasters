import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../src/components/Button";
import CoasterList from "../src/components/CoasterComps/CoasterList";
import Header from "../src/components/Header/Header";
import { useCoaster } from "../src/contexts/coasterContext";

export default function Home({ coasters }) {
  const { setCoasters } = useCoaster();
  const router = useRouter();

  //sends request to api to add new empty coaster
  const handleAddCoaster = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/Coaster", {
        name: "",
      });
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (coasters) {
      console.log(coasters);
      setCoasters(coasters);
    }
  }, [coasters, setCoasters]);

  return (
    <>
      <Header />
      <div className="mt-5">
        <div id="buttonarea" className="ml-10">
          <Button title="Bierdeckel Hinzufügen" onClick={handleAddCoaster} />
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
  let coasters = [];
  try {
    coasters = await prisma.coaster.findMany({
      include: { drinks: true },
    });
  } catch (e) {
    //logger
    console.log(e);
  } finally {
    prisma.$disconnect();
  }

  return {
    props: { coasters },
  };
}
