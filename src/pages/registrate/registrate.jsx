import { useState } from "react";
import Header from "../../components/Header/Header";
import RegisterFormComponent from "../../components/RegisterFormComponent/RegisterFormComponent";
import RegisterCodeConfirmationComponent from "../../components/RegistercodeconfirmationComponent/RegistercodeconfirmationComponent";

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
