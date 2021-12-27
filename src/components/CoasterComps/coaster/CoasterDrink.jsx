import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CoasterDrink({ drink }) {
  const [displayDate, setDisplayDate] = useState();

  const formatDate = () => {
    const drinkDate = new Date(drink.date);
    console.log(drinkDate);
    const now = new Date();

    const currentDay = now.getDate();
    const currentMonth = now.getMonth();

    const drinkDateSeconds =
      drinkDate.getMinutes() < 10
        ? "0" + drinkDate.getMinutes()
        : drinkDate.getMinutes();

    //if same day show time
    if (
      drinkDate.getDate() === currentDay &&
      drinkDate.getMonth() === currentMonth
    ) {
      setDisplayDate(`${drinkDate.getHours()}:${drinkDateSeconds} Uhr`);
    } else {
      //else show dat
      setDisplayDate(
        `${drinkDate.getDate()}.${
          drinkDate.getMonth() + 1
        }.${drinkDate.getFullYear()}`
      );
    }
  };

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <div className="w-full py-2 flex justify-between px-2">
      <div>{displayDate}</div>
      <div>{drink.drink.title}</div>
    </div>
  );
}
