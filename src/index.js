import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SpaceProvider } from "./context/spacedata.context";
import { DestinationProvider } from "./context/destination.context";
import { CrewProvider } from "./context/crew.context";
import { TechnologyProvider } from "./context/technology.context";
import { ScreenProvider } from "./context/screensize.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpaceProvider>
        <ScreenProvider>
          <DestinationProvider>
            <CrewProvider>
              <TechnologyProvider>
                <App />
              </TechnologyProvider>
            </CrewProvider>
          </DestinationProvider>
        </ScreenProvider>
      </SpaceProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
