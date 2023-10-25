import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Home from "./pages/Home/Home";
import Registrate from "./pages/registrate/registrate";
import Iniciar_sesion from "./pages/iniciar-sesion/iniciar-sesion";
import toastStyle from "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import User from "./pages/user/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.registrate} element={<Registrate />} />
        <Route path={routes.iniciar_sesion} element={<Iniciar_sesion />} />
        <Route path={routes.user} element={<User />} />
      </Routes>
      <ToastContainer
        className={toastStyle}
        position="bottom-center"
        theme="colored"
      />
    </div>
  );
}

export default App;
