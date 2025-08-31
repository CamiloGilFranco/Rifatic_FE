import { BsDice6, BsEnvelope, BsLock } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";

const IconSelector = ({ name }) => {
  switch (name) {
    case "dice":
      return <BsDice6 />;
    case "login":
      return <IoIosLogIn />;
    case "mail":
      return <BsEnvelope />;
    case "password":
      return <BsLock />;

    default:
      return;
  }
};

export default IconSelector;
