import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import FooterWrapper from "../../molecules/FooterWrapper/FooterWrapper";
import { StyledMenuList } from "../../molecules/MenuList/MenuList.styles";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledMenuList>
        <MenuListItem item="Polityka prywatności" />
        <MenuListItem item="Kontakt" />
        <MenuListItem item="Ankieta" />
        <MenuListItem item="FAQ" />
      </StyledMenuList>
      <FooterWrapper />
    </StyledFooter>
  );
};

export default Footer;
