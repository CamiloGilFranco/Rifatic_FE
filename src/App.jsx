import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Home from "./pages/Home/Home";
import Registrate from "./pages/registrate/registrate";
import Iniciar_sesion from "./pages/iniciar-sesion/iniciar-sesion";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.registrate} element={<Registrate />} />
        <Route path={routes.iniciar_sesion} element={<Iniciar_sesion />} />
      </Routes>
    </div>
  );
}

export default App;
