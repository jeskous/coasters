import React from "react";

export default function CoasterHeader({ coaster }) {
  return (
    <input
      type="text"
      className="w-full h-1/6 rounded-t-lg pl-5 py-2 text-md border-b-2 border-black"
      readOnly
      value={coaster.name}
    />
  );
}
