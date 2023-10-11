import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Home from "./pages/Home/Home";
import Registrate from "./pages/Registrate";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.registrate} element={<Registrate />} />
      </Routes>
    </div>
  );
}

export default App;
