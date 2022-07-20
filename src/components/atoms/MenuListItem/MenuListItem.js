import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLink } from "../StyledLink/StyledLink.styles";
import { StyledMenuListItem } from "./MenuListItem.styles";

const MenuListItem = ({ item, isMain }) => {
  return (
    <StyledMenuListItem as={StyledLink} to={item.link} isMain={isMain}>
      {item.icon ? <FontAwesomeIcon icon={item.icon} /> : null}
      {item.title}
    </StyledMenuListItem>
  );
};

export default MenuListItem;
