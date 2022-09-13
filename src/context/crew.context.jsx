import { createContext, useState } from "react";
import DouglasPNG from "../assets/crew/image-douglas-hurley.png";
import DouglasWEBP from "../assets/crew/image-douglas-hurley.webp";
import MarkPNG from "../assets/crew/image-mark-shuttleworth.png";
import MarkWEBP from "../assets/crew/image-mark-shuttleworth.webp";
import VictorPNG from "../assets/crew/image-victor-glover.png";
import VictorWEBP from "../assets/crew/image-victor-glover.webp";
import AnoushehPNG from "../assets/crew/image-anousheh-ansari.png";
import AnoushehWEBP from "../assets/crew/image-anousheh-ansari.webp";

export const CrewContext = createContext({
  crewPNG: [],
  crewWEBP: [],
});

export const CrewProvider = ({ children }) => {
  const [crewPNG, setCrewPNG] = useState([
    DouglasPNG,
    MarkPNG,
    VictorPNG,
    AnoushehPNG,
  ]);
  const [crewWEBP, setCrewWEBP] = useState([
    DouglasWEBP,
    MarkWEBP,
    VictorWEBP,
    AnoushehWEBP,
  ]);
  const value = { crewPNG, crewWEBP };
  return <CrewContext.Provider value={value}>{children}</CrewContext.Provider>;
};
