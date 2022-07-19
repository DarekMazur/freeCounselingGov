import Logo from "../../atoms/Logo/Logo";
import MenuList from "../../molecules/MenuList/MenuList";

const Header = () => {
  return (
    <header>
      <Logo isWide />
      <MenuList />
    </header>
  );
};

export default Header;
