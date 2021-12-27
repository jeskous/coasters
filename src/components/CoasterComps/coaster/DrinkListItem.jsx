import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useCoaster } from "../../../contexts/coasterContext";

export default function DrinkListItem({ drink, coaster, closeModal }) {
  const { setIsLoading, isLoading } = useCoaster();
  const router = useRouter();

  const handleAddDrink = async () => {
    try {
      setIsLoading(true);
      await axios.post(`/api/CoasterDrink/${coaster.id}`, {
        title: drink.title,
        cid: coaster.id,
        did: drink.id,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      closeModal();
      router.reload();
    }
  };

  return (
    <button
      className="w-full h-full mb-2 rounded-md bg-green-300 text-xl"
      onClick={handleAddDrink}
    >
      {drink.title}
    </button>
  );
}
