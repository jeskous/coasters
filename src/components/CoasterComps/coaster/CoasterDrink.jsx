import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CoasterDrink({ drink }) {
  const [displayDate, setDisplayDate] = useState();

  const formatDate = () => {
    const drinkDate = new Date();
    const now = new Date();

    console.log(drinkDate.getMonth() + 1);

    const currentDay = now.getDate();
    const currentMonth = now.getMonth();

    const drinkDateMinutes =
      drinkDate.getMinutes() < 10
        ? "0" + drinkDate.getMinutes()
        : drinkDate.getMinutes();

    //if same day show time
    if (
      drinkDate.getDate() === currentDay &&
      drinkDate.getMonth() === currentMonth
    ) {
      setDisplayDate(`${drinkDate.getHours()}:${drinkDateMinutes} Uhr`);
    } else {
      //else show dat
      setDisplayDate(
        `${drinkDate.getDate()}.${
          drinkDate.getMonth() + 1
        }.${drinkDate.getFullYear()} ${drinkDate.getHours()}:${drinkDateMinutes}`
      );
    }
  };

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <div className="w-full py-2 flex justify-between px-2 divide-x-2 divide-gray-500">
      <div className="w-1/3">{displayDate}</div>
      <div className="w-2/3 pl-2 break-all">{drink.drink.title}</div>
    </div>
  );
}
