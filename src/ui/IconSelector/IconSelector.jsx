import {
  BsArrowRight,
  BsBarChart,
  BsDice6,
  BsEnvelope,
  BsFacebook,
  BsGear,
  BsInstagram,
  BsLightningCharge,
  BsLinkedin,
  BsLock,
  BsPeople,
  BsShieldCheck,
  BsStars,
  BsTrophy,
  BsTwitter,
} from "react-icons/bs";
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
    case "chart":
      return <BsBarChart />;
    case "shield":
      return <BsShieldCheck />;
    case "people":
      return <BsPeople />;
    case "lightning":
      return <BsLightningCharge />;
    case "trophy":
      return <BsTrophy />;
    case "gear":
      return <BsGear />;
    case "sparks":
      return <BsStars />;
    case "facebook":
      return <BsFacebook />;
    case "twitter":
      return <BsTwitter />;
    case "instagram":
      return <BsInstagram />;
    case "linkedin":
      return <BsLinkedin />;

    default:
      return;
  }
};

export default IconSelector;
