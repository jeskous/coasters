import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useCoaster } from "../../../contexts/coasterContext";
import Loading from "../../Loading";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList({
  searchQuery,
  coaster,
  closeModal,
  isOpen,
}) {
  const { drinks, isLoading } = useCoaster();
  const router = useRouter();

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
      router.reload();
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
          &apos;{searchQuery}&apos; Hinzufügen!
        </button>
      </div>
    );

  if (isLoading && isOpen) return <Loading />;
  return (
    <div className="max-h-60 flex mt-4 flex-col overflow-scroll">
      {renderQueriedDrinks()}
    </div>
  );
}
