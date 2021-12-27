import React from "react";
import AddDrinkModal from "./AddDrinkModal";
import CoasterDrinkList from "./CoasterDrinkList";
import CoasterHeader from "./CoasterHeader";
import DeleteCoasterBtn from "./DeleteCoasterBtn";

export default function Coaster({ coaster }) {
  return (
    <div className="w-64 h-64 mx-2 my-4 relative rounded-xl border-2 border-black bg-white">
      <DeleteCoasterBtn coaster={coaster} />
      <CoasterHeader coaster={coaster} />
      <CoasterDrinkList drinkList={coaster.drinks} />

      <AddDrinkModal coaster={coaster} />
    </div>
  );
}
