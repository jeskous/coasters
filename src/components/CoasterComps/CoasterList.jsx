import React from "react";
import { useCoaster } from "../../contexts/coasterContext";
import Loading from "../Loading";
import Coaster from "./coaster/Coaster";

export default function CoasterList() {
  const { coasters } = useCoaster();

  const renderCoasters = () => {
    return coasters.map((coaster, index) => {
      if (!coaster) <div>Fehler beim Coaster rendern</div>;
      return <Coaster key={index} coaster={coaster} />;
    });
  };

  if (!coasters || coasters.length < 1) return <Loading />;

  return (
    <div className="mt-10 flex flex-wrap justify-center">
      {renderCoasters()}
    </div>
  );
}
