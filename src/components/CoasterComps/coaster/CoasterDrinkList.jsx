import React from "react";
import CoasterDrink from "./CoasterDrink";

export default function CoasterDrinkList({ drinkList }) {
  const renderDrinkList = () => {
    return drinkList.map((drink, index) => {
      return <CoasterDrink key={index} drink={drink} />;
    });
  };

  return (
    <div className="w-full h-4/6 overflow-scroll">{renderDrinkList()}</div>
  );
}
