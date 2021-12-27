import React from "react";

export default function CoasterDrink({ drink }) {
  const getDateForDrink = () => {
    //if same day show time
    //else show date
  };

  return (
    <div className="w-full py-2 flex justify-between px-2">
      <div>date here</div>
      <div>{drink.title}</div>
    </div>
  );
}
