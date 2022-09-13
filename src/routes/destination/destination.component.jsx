import "./destination.styles.scss";
import { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../../context/spacedata.context";
import DestinationContent from "../../components/destination-content/destination-content.component";
import { DestinationContext } from "../../context/destination.context";
import { ScreenContext } from "../../context/screensize.context";
import DesktopDestination from "../../assets/destination/background-destination-desktop.jpg";
import TabletDestination from "../../assets/destination/background-destination-tablet.jpg";
import MobileDestination from "../../assets/destination/background-destination-mobile.jpg";

const Destination = () => {
  const { spaceData } = useContext(SpaceContext);
  const { destinations } = spaceData;
  const { destinationPNG, destinationWEBP } = useContext(DestinationContext);
  const { screenSize } = useContext(ScreenContext);

  const [destiNumber, setDestiCount] = useState(0);

  const BackgroundImage = {
    backgroundImage: `url(${
      screenSize >= 768
        ? DesktopDestination
        : screenSize >= 480
        ? TabletDestination
        : MobileDestination
    })`,
  };

  return (
    <div className="destination-container" style={BackgroundImage}>
      <h2>
        <span>01</span> Pick your destination
      </h2>
      <div>
        <img
          src={
            screenSize >= 480
              ? destinationPNG[destiNumber]
              : destinationWEBP[destiNumber]
          }
          alt=""
        />
      </div>
      <div>
        <div>
          <button onClick={() => setDestiCount(0)}>Moon</button>
          <button onClick={() => setDestiCount(1)}>Mars</button>
          <button onClick={() => setDestiCount(2)}>Europa</button>
          <button onClick={() => setDestiCount(3)}>Titan</button>
        </div>
        <DestinationContent destinationName={destinations[destiNumber]} />
      </div>
    </div>
  );
};

export default Destination;
