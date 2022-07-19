import logo from "../../../assets/logo.png";
import logo_wide from "../../../assets/logo_wide.png";

const Logo = ({ isWide }) => {
  return <img src={isWide ? logo_wide : logo} alt="" />;
};

export default Logo;
