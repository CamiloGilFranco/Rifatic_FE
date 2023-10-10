import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./constants/routes";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
