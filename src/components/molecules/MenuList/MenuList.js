import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styles";

const MenuList = () => {
  const menuData = [
    {
      title: "Strona główna",
      link: "",
      icon: ["fas", "house"],
    },
    {
      title: "FAQ",
      link: "",
      icon: ["fas", "circle-question"],
    },
    {
      title: "Kontakt",
      link: "",
      icon: ["fas", "at"],
    },
  ];

  return (
    <StyledMenuList>
      {menuData.map((item) => (
        <MenuListItem item={item} />
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
