import CrewContent from "../../components/crew-content/crew-content.component";
import "./crew.styles.scss";
import { useContext, useState, useEffect } from "react";
import { SpaceContext } from "../../context/spacedata.context";
import { CrewContext } from "../../context/crew.context";
import { ScreenContext } from "../../context/screensize.context";
import DesktopCrew from "../../assets/crew/background-crew-desktop.jpg";
import TabletCrew from "../../assets/crew/background-crew-tablet.jpg";
import MobileCrew from "../../assets/crew/background-crew-mobile.jpg";

const Crew = () => {
  const { spaceData } = useContext(SpaceContext);
  const { crewPNG, crewWEBP } = useContext(CrewContext);
  const { crew } = spaceData;
  const { screenSize } = useContext(ScreenContext);
  const [crewNumber, setCrewCount] = useState(0);

  const BackgroundImage = {
    backgroundImage: `url(${
      screenSize >= 768
        ? DesktopCrew
        : screenSize >= 480
        ? TabletCrew
        : MobileCrew
    })`,
  };

  return (
    <div className="crew-container" style={BackgroundImage}>
      <h2>
        <span>02</span> Meet your crew
      </h2>
      <CrewContent
        crewDetails={crew[crewNumber]}
        setCrewCount={setCrewCount}
        crewNumber={crewNumber}
        crew={crew}
      />
      <div className="crew-img">
        <img
          src={screenSize >= 480 ? crewPNG[crewNumber] : crewWEBP[crewNumber]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Crew;
