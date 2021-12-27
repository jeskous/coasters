import React, { createContext, useContext, useState } from "react";

const coasterContext = createContext();

export function ProvideCoasterContext({ children }) {
  const coasterValue = useProvideCoaster();
  return (
    <coasterContext.Provider value={coasterValue}>
      {children}
    </coasterContext.Provider>
  );
}

export const useCoaster = () => {
  return useContext(coasterContext);
};

//TeamView Content here
function useProvideCoaster() {
  const [coasters, setCoasters] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return { coasters, setCoasters, drinks, setDrinks, isLoading, setIsLoading };
}

const mockData = [
  {
    name: "jesko",
    drinks: [
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Ende",
        date: "123",
      },
    ],
  },
  {
    name: "jesko",
    drinks: [
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Ende",
        date: "123",
      },
    ],
  },
  {
    name: "jesko",
    drinks: [
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Ende",
        date: "123",
      },
    ],
  },
  {
    name: "jesko",
    drinks: [
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Fanta Korn",
        date: "123",
      },
      {
        title: "Ende",
        date: "123",
      },
    ],
  },
];
