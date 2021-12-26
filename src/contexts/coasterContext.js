import React, { createContext, useContext } from "react";

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
  return useContext(teamViewContext);
};

//TeamView Content here
function useProvideCoaster() {
  return {};
}
