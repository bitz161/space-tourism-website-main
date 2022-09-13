import { createContext, useState, useEffect } from "react";

export const ScreenContext = createContext({
  screenSize: 0,
});

export const ScreenProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const value = { screenSize, setScreenSize };
  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
