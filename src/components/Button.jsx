import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button
      className="bg-primary text-xl px-2 py-4 text-white rounded-xl hover:bg-secondary hover:text-primary"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
