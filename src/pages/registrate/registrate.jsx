import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RegisterFormComponent from "../../components/RegisterFormComponent/RegisterFormComponent";
import RegisterCodeConfirmationComponent from "../../components/RegistercodeconfirmationComponent/RegistercodeconfirmationComponent";

const Registrate = () => {
  const [showForm, setShowForm] = useState(true);
  const [secureCode, setSecureCode] = useState("");

  console.log(secureCode);
  return (
    <div>
      <Header />
      {showForm ? (
        <RegisterFormComponent
          setShowForm={setShowForm}
          setSecureCode={setSecureCode}
        />
      ) : (
        <RegisterCodeConfirmationComponent />
      )}

      <Footer />
    </div>
  );
};

export default Registrate;
