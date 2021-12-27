import React from "react";
import { useState } from "react";
import AddDrinkBtn from "./AddDrinkBtn";
import CoasterDrinkList from "./CoasterDrinkList";
import CoasterHeader from "./CoasterHeader";

export default function Coaster({ coaster }) {
  return (
    <div className="w-64 h-64 mx-2 my-4 relative rounded-xl border-2 border-black bg-white">
      <CoasterHeader coaster={coaster} />
      <CoasterDrinkList drinkList={coaster.drinks} />

      <AddDrinkBtn />
    </div>
  );
}
