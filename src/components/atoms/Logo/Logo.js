import logo from "../../../assets/logo.png";
import logo_wide from "../../../assets/logo_wide.png";
import { StyledLogo } from "./logo.styles";

const Logo = ({ isWide }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledLogo src={isWide ? logo_wide : logo} alt="" onClick={scrollToTop} />
  );
};

export default Logo;
