import { mainMenu } from "../../../data/menuData";
import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styles";

const MenuList = () => {
  return (
    <StyledMenuList>
      {mainMenu.map((item) => (
        <MenuListItem item={item} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
