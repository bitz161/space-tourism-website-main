import "./home.styles.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScreenContext } from "../../context/screensize.context";
import DesktopHomeBackground from "../../assets/home/background-home-desktop.jpg";
import TabletHomeBackground from "../../assets/home/background-home-tablet.jpg";
import MobileHomeBackground from "../../assets/home/background-home-mobile.jpg";
const Home = () => {
  const { screenSize } = useContext(ScreenContext);
  const navigate = useNavigate();
  const ExploreSpace = () => {
    navigate("/space-tourism-website-main/destination");
  };

  const BackgroundImage = {
    backgroundImage: `url(${
      screenSize >= 768
        ? DesktopHomeBackground
        : screenSize >= 480
        ? TabletHomeBackground
        : MobileHomeBackground
    })`,
  };

  return (
    <div className="home-container" style={BackgroundImage}>
      <section>
        <div>So, you want to travel to</div>
        <h1>Space</h1>
        <div>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </section>
      <div>
        <button onClick={ExploreSpace}>Explore</button>
      </div>
    </div>
  );
};

export default Home;
