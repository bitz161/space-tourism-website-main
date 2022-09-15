import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Destination from "./routes/destination/destination.component";
import Crew from "./routes/crew/crew.component";
import Technology from "./routes/technology/technology.component";

function App() {
  return (
    <Routes>
      <Route path="space-tourism-website-main/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="space-tourism-website-main/destination"
          element={<Destination />}
        />
        <Route path="space-tourism-website-main/crew" element={<Crew />} />
        <Route
          path="space-tourism-website-main/technology"
          element={<Technology />}
        />
      </Route>
    </Routes>
  );
}

export default App;
