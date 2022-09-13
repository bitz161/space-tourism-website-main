import { createContext, useState } from "react";
import VehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import VehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

export const TechnologyContext = createContext({
  technologyPNG: [],
  technologyWEBP: [],
});

export const TechnologyProvider = ({ children }) => {
  const [technologyPNG, setTechnologyPNG] = useState([
    VehiclePortrait,
    SpaceportPortrait,
    SpaceCapsulePortrait,
  ]);
  const [technologyWEBP, setTechnologyWEBP] = useState([
    VehicleLandscape,
    SpaceportLandscape,
    SpaceCapsuleLandscape,
  ]);
  const value = { technologyPNG, technologyWEBP };
  return (
    <TechnologyContext.Provider value={value}>
      {children}
    </TechnologyContext.Provider>
  );
};
