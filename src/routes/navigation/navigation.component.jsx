import "./navigation.styles.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Pagelogo } from "../../assets/shared/logo.svg";
import { useContext, useEffect, Fragment, useState } from "react";
import { ScreenContext } from "../../context/screensize.context";
import { ReactComponent as Hamburger } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";

const Navigation = () => {
  const { screenSize } = useContext(ScreenContext);
  const [showLinks, setShowlinks] = useState(false);
  const handleChange = () => {
    setShowlinks(!showLinks);
  };

  const navigate = useNavigate();
  const HomeNavigate = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="navigation-container">
        <Pagelogo onClick={HomeNavigate} />
        {screenSize >= 768 && <hr />}
        <section>
          {screenSize <= 480 &&
            (showLinks ? (
              <CloseIcon onClick={handleChange} />
            ) : (
              <Hamburger onClick={handleChange} />
            ))}
          <div
            className={`navigation-link-container ${
              !showLinks && "displaynone"
            }`}
          >
            <div
              className={`blurredBackground ${
                screenSize <= 768 && "displaynone"
              }`}
            />

            <Link to="/destination" className="linkRoute">
              <span id="link-span">01</span> Destination
            </Link>
            <Link to="/crew" className="linkRoute">
              <span id="link-span">02</span> Crew
            </Link>
            <Link to="/technology" className="linkRoute">
              <span id="link-span">03</span> Technology
            </Link>
          </div>
        </section>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
