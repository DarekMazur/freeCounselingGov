import { socialData } from "../../../data/menuData";
import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import FooterWrapper from "../../molecules/FooterWrapper/FooterWrapper";
import { StyledMenuList } from "../../molecules/MenuList/MenuList.styles";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledMenuList>
        {socialData.map((item) => (
          <MenuListItem item={item} />
        ))}
      </StyledMenuList>
      <FooterWrapper />
    </StyledFooter>
  );
};

export default Footer;
