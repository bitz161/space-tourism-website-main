import TechnologyContent from "../../components/technology-content/technology-content.component";
import "./technology.styles.scss";
import { useContext, useState, useEffect } from "react";
import { TechnologyContext } from "../../context/technology.context";
import { SpaceContext } from "../../context/spacedata.context";
import { ScreenContext } from "../../context/screensize.context";

import DesktopTech from "../../assets/technology/background-technology-desktop.jpg";
import TabletTech from "../../assets/technology/background-technology-tablet.jpg";
import MobileTech from "../../assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  const { spaceData } = useContext(SpaceContext);
  const { technology } = spaceData;
  const { technologyPNG, technologyWEBP } = useContext(TechnologyContext);
  const { screenSize } = useContext(ScreenContext);
  const [techCount, setTechCount] = useState(0);

  const BackgroundImage = {
    backgroundImage: `url(${
      screenSize >= 768
        ? DesktopTech
        : screenSize >= 480
        ? TabletTech
        : MobileTech
    })`,
  };

  return (
    <div className="tech-container" style={BackgroundImage}>
      <div>
        <span>03</span> Space launch 101
      </div>
      <section>
        <div className="tech-options">
          {technology.map((data, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setTechCount(idx)}
                className={idx === techCount && "techButtonColor"}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <div className="tech-details-container">
          <TechnologyContent technologyData={technology[techCount]} />
        </div>
        <div className="tech-img">
          <img
            alt=""
            src={
              screenSize >= 480
                ? technologyPNG[techCount]
                : technologyWEBP[techCount]
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Technology;
