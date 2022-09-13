import TechnologyContent from "../../components/technology-content/technology-content.component";
import "./technology.styles.scss";
import { useContext, useState, useEffect } from "react";
import { TechnologyContext } from "../../context/technology.context";
import { SpaceContext } from "../../context/spacedata.context";
import { ScreenContext } from "../../context/screensize.context";
const Technology = () => {
  const { spaceData } = useContext(SpaceContext);
  const { technology } = spaceData;
  const { technologyPNG, technologyWEBP } = useContext(TechnologyContext);
  const { screenSize } = useContext(ScreenContext);
  const [techCount, setTechCount] = useState(0);

  return (
    <div>
      <div>03 Space launch 101</div>
      <section>
        <div>
          <div>
            <button onClick={() => setTechCount(0)}>1</button>
            <button onClick={() => setTechCount(1)}>2</button>
            <button onClick={() => setTechCount(2)}>3</button>
          </div>
          <div>
            {/* Component information */}
            <TechnologyContent technologyData={technology[techCount]} />
          </div>
        </div>
        <div>
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
