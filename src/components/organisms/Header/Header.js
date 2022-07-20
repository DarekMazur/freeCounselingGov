import Logo from "../../atoms/Logo/Logo";
import MenuList from "../../molecules/MenuList/MenuList";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo isWide />
      <MenuList />
    </StyledHeader>
  );
};

export default Header;
