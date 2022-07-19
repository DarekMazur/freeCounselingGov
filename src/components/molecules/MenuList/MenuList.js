import MenuListItem from "../../atoms/MenuListItem/MenuListItem";

const MenuList = () => {
  const menuData = ["Home", "FAQ", "Contact"];

  return (
    <ul>
      {menuData.map((item) => (
        <MenuListItem item={item} />
      ))}
    </ul>
  );
};

export default MenuList;
