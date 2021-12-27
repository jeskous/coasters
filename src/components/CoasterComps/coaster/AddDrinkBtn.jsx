import React from "react";

export default function AddDrinkBtn() {
  const handleAddDrink = () => {};

  return (
    <button
      className="bg-yellow-300 rounded-b-lg absolute bottom-0 w-full h-1/6"
      onClick={handleAddDrink}
    >
      Neuer Drink
    </button>
  );
}
