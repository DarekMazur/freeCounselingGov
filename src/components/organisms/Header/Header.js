import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import MenuList from "../../molecules/MenuList/MenuList";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo isWide />
      </Link>
      <MenuList />
    </StyledHeader>
  );
};

export default Header;
