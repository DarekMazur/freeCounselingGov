import logo from "../../../assets/logo.png";
import logo_wide from "../../../assets/logo_wide.png";
import { StyledLogo } from "./logo.styles";

const Logo = ({ isWide }) => {
  return <StyledLogo src={isWide ? logo_wide : logo} alt="" />;
};

export default Logo;
