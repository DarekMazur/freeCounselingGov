import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styles";

const MenuList = () => {
  const menuData = ["Strona główna", "FAQ", "Kontakt"];

  return (
    <StyledMenuList>
      {menuData.map((item) => (
        <MenuListItem item={item} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
