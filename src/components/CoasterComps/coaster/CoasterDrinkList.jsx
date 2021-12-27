import React from "react";
import CoasterDrink from "./CoasterDrink";

export default function CoasterDrinkList({ drinkList }) {
  const renderDrinkList = () => {
    console.log(typeof drinkList);
    const reversedList = drinkList.reverse();
    console.log(reversedList);
    return reversedList.map((drink, index) => {
      return <CoasterDrink key={index} drink={drink} />;
    });
  };

  return (
    <div className="w-full h-4/6 overflow-scroll">{renderDrinkList()}</div>
  );
}
