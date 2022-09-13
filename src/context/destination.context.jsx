import { createContext, useState } from "react";
import MoonPNG from "../assets/destination/image-moon.png";
import MoonWEBP from "../assets/destination/image-moon.webp";
import MarsPNG from "../assets/destination/image-mars.png";
import MarsWEBP from "../assets/destination/image-mars.webp";
import EuropaPNG from "../assets/destination/image-europa.png";
import EuropaWEBP from "../assets/destination/image-europa.webp";
import TitanPNG from "../assets/destination/image-titan.png";
import TitanWEBP from "../assets/destination/image-titan.webp";

export const DestinationContext = createContext({
  destinationPNG: [],
  destinationWEBP: [],
});

export const DestinationProvider = ({ children }) => {
  const [destinationPNG, setDestinationPNG] = useState([
    MoonPNG,
    MarsPNG,
    EuropaPNG,
    TitanPNG,
  ]);
  const [destinationWEBP, setDestinationWEBP] = useState([
    MoonWEBP,
    MarsWEBP,
    EuropaWEBP,
    TitanWEBP,
  ]);
  const value = { destinationPNG, destinationWEBP };
  return (
    <DestinationContext.Provider value={value}>
      {children}
    </DestinationContext.Provider>
  );
};
