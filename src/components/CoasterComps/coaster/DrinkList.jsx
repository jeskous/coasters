import axios from "axios";
import React from "react";
import { useCoaster } from "../../../contexts/coasterContext";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList({ searchQuery, coaster, closeModal }) {
  const { drinks } = useCoaster();

  const queriedDrinks = () => {
    let filteredDrinks = [];

    for (var j = 0; j < drinks.length; j++) {
      if (drinks[j].title.match(searchQuery)) filteredDrinks.push(drinks[j]);
    }
    return filteredDrinks;
  };

  const renderQueriedDrinks = () => {
    return queriedDrinks().map((drink, index) => {
      return (
        <DrinkListItem
          key={index}
          drink={drink}
          coaster={coaster}
          closeModal={closeModal}
        />
      );
    });
  };

  const handleAddNewDrink = async () => {
    try {
      await axios.post(`/api/Coaster/${coaster.id}`, {
        title: searchQuery,
        cid: coaster.id,
        did: -1,
      });
    } catch (e) {
      console.log(e);
    } finally {
      closeModal();
    }
  };

  if (!queriedDrinks || queriedDrinks().length < 1)
    return (
      <div>
        <div>Keine treffer!</div>
        <button
          onClick={handleAddNewDrink}
          className="w-full h-full mt-4 mb-2 rounded-md bg-blue-300 text-xl"
        >
          "{searchQuery}" Hinzufügen!
        </button>
      </div>
    );

  return (
    <div className="max-h-60 flex mt-4 flex-col overflow-scroll">
      {renderQueriedDrinks()}
    </div>
  );
}
