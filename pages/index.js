import { PencilAltIcon } from "@heroicons/react/solid";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../src/components/Button";
import CoasterList from "../src/components/CoasterComps/CoasterList";
import Header from "../src/components/Header/Header";
import { useCoaster } from "../src/contexts/coasterContext";

export default function Home({ coasters, drinks }) {
  const {
    setCoasters,
    setDrinks,
    setIsEditable,
    isEditable,
    setIsLoading,
    isLoading,
  } = useCoaster();
  const router = useRouter();

  //sends request to api to add new empty coaster
  const handleAddCoaster = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post("/api/Coaster", {
        name: "",
      });
      router.reload();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (coasters) {
      setCoasters(coasters);
    }
    if (drinks) {
      setDrinks(drinks);
    }
  }, [coasters, drinks, setCoasters, setDrinks]);

  return (
    <>
      <Header />
      <div className="mt-5">
        <div id="buttonarea" className="mx-10 flex justify-between items-start">
          {!isLoading && (
            <Button title="Bierdeckel Hinzufügen" onClick={handleAddCoaster} />
          )}

          <PencilAltIcon
            width={30}
            onClick={() => setIsEditable(!isEditable)}
            className="cursor-pointer"
          />
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
  let drinks = [];
  try {
    coasters = await prisma.coaster.findMany({
      include: {
        drinks: {
          orderBy: {
            id: "desc",
          },
          include: {
            drink: true,
          },
        },
      },
    });
    drinks = await prisma.drink.findMany();
  } catch (e) {
    //logger
    console.log(e);
  } finally {
    prisma.$disconnect();
  }

  return {
    props: { coasters, drinks },
  };
}
