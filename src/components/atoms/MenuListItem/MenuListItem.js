import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledMenuListItem } from "./MenuListItem.styles";

const MenuListItem = ({ item }) => {
  return (
    <StyledMenuListItem>
      {item.icon ? <FontAwesomeIcon icon={item.icon} /> : null}
      {item.title}
    </StyledMenuListItem>
  );
};

export default MenuListItem;
