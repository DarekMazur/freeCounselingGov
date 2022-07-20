import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styles";

const MenuList = () => {
  const menuData = ["Home", "FAQ", "Contact"];

  return (
    <StyledMenuList>
      {menuData.map((item) => (
        <MenuListItem item={item} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
