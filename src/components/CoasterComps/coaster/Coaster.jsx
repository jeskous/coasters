import React from "react";
import { useState } from "react";
import AddDrinkBtn from "./AddDrinkBtn";
import CoasterDrinkList from "./CoasterDrinkList";
import CoasterHeader from "./CoasterHeader";
import { XIcon } from "@heroicons/react/solid";
import axios from "axios";

export default function Coaster({ coaster }) {
  const handleDeleteCoaster = async () => {
    try {
      await axios.delete(`/api/Coaster/${coaster.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-64 h-64 mx-2 my-4 relative rounded-xl border-2 border-black bg-white">
      <XIcon
        width={20}
        className="absolute right-0 top-0 cursor-pointer"
        onClick={handleDeleteCoaster}
      />
      <CoasterHeader coaster={coaster} />
      <CoasterDrinkList drinkList={coaster.drinks} />

      <AddDrinkBtn />
    </div>
  );
}
