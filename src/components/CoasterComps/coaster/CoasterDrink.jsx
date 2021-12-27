import { XIcon } from "@heroicons/react/solid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCoaster } from "../../../contexts/coasterContext";

export default function CoasterDrink({ drink }) {
  const [displayDate, setDisplayDate] = useState();
  const { isEditable } = useCoaster();

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

  const handleDeleteCoasterDrink = async () => {
    try {
      await axios.delete(`/api/CoasterDrink/${drink.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <div className="w-full py-2 flex justify-between px-2 divide-x-2 divide-gray-500">
      <div className="w-1/3">{displayDate}</div>
      <div className="w-2/3 pl-2 break-all font-bold">{drink.drink.title}</div>
      {isEditable && <XIcon onClick={handleDeleteCoasterDrink} width={40} />}
    </div>
  );
}
