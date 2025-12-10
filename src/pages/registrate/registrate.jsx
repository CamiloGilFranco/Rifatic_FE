import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import RegisterFormComponent from "../../components/RegisterFormComponent/RegisterFormComponent.jsx";
import RegisterCodeConfirmationComponent from "../../components/RegisterCodeConfirmationComponent/RegisterCodeConfirmationComponent.jsx";

const Registrate = () => {
  const [showForm, setShowForm] = useState(true);
  const [token, setToken] = useState("");

  return (
    <div>
      <Header />
      {showForm ? (
        <RegisterFormComponent setShowForm={setShowForm} setToken={setToken} />
      ) : (
        <RegisterCodeConfirmationComponent token={token} />
      )}
    </div>
  );
};

export default Registrate;
