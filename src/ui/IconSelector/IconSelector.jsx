import { BsArrowRight, BsDice6, BsEnvelope, BsLock } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
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
    case "right-arrow":
      return <BsArrowRight />;
    case "play":
      return <CiPlay1 />;

    default:
      return;
  }
};

export default IconSelector;
