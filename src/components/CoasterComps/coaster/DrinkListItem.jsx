import axios from "axios";
import React from "react";

export default function DrinkListItem({ drink, coaster, closeModal }) {
  const handleAddDrink = async () => {
    try {
      await axios.post(`/api/CoasterDrink/${coaster.id}`, {
        title: drink.title,
        cid: coaster.id,
        did: drink.id,
      });
    } catch (e) {
      console.log(e);
    } finally {
      closeModal();
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
