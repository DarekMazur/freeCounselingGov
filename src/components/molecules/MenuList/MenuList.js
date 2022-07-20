import { mainMenu } from "../../../data/menuData";
import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledLink } from "../../atoms/StyledLink/StyledLink.styles";
import { StyledMenuList } from "./MenuList.styles";

const MenuList = () => {
  return (
    <StyledMenuList>
      {mainMenu.map((item) => (
        <MenuListItem as={StyledLink} item={item} isMain />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
