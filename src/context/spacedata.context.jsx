import { createContext, useState } from "react";
import SPACE_DATA from "../data.json";

export const SpaceContext = createContext({
  spaceData: {},
});

export const SpaceProvider = ({ children }) => {
  const [spaceData, setSpaceData] = useState(SPACE_DATA);
  const value = { spaceData, setSpaceData };
  return (
    <SpaceContext.Provider value={value}>{children}</SpaceContext.Provider>
  );
};
