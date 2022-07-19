import MenuListItem from "../../atoms/MenuListItem/MenuListItem";

const MenuList = () => {
  return (
    <ul>
      <MenuListItem item="Home" />
      <MenuListItem item="FAQ" />
      <MenuListItem item="Contact" />
    </ul>
  );
};

export default MenuList;
