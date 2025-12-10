import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes.js";
import Home from "./pages/Home/Home.jsx";
import Registrate from "./pages/registrate/registrate.jsx";
import toastStyle from "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import User from "./pages/user/User.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import UserRedirect from "./pages/user/UserRedirect.jsx";
import Admin from "./pages/Admin/Admin.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.registrate} element={<Registrate />} />

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

        <Route path={routes.admin} element={<Admin />} />
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
