import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Home from "./pages/Home/Home";
import Registrate from "./pages/registrate/registrate";
import Iniciar_sesion from "./pages/iniciar-sesion/iniciar-sesion";
import toastStyle from "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import User from "./pages/user/User";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserRedirect from "./pages/user/UserRedirect";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.registrate} element={<Registrate />} />

        <Route path={routes.iniciar_sesion} element={<Iniciar_sesion />} />

        <Route path={routes.user} element={<UserRedirect />} />

        <Route
          path={routes.userRoute}
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />

        <Route
          path={routes.userRouteOption}
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />

        <Route
          path={routes.userRouteOptionThree}
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
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
