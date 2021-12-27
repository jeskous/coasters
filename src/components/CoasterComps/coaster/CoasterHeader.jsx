import axios from "axios";
import React from "react";
import { useState } from "react";

export default function CoasterHeader({ coaster }) {
  const [name, setName] = useState(coaster.name);

  const handleChangeName = async (e) => {
    setName(e.currentTarget.value);
  };

  const handleOnBlur = async () => {
    await axios.put(`/api/Coaster/${coaster.id}`, { name: name });
  };

  return (
    <input
      type="text"
      className="w-full h-1/6 rounded-t-lg pl-5 py-2 text-md border-b-2 border-black"
      onChange={handleChangeName}
      onBlur={handleOnBlur}
      placeholder="Namen eingeben"
      value={name}
    />
  );
}
