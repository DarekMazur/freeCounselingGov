import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentYear, variables } from "../../../utils/helpers";
import { StyledCopyright } from "../../atoms/Copyright/Copyright.styles";
import Logo from "../../atoms/Logo/Logo";
import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import { StyledSocialLIstItem } from "../../atoms/SocialListItem/SocialListItem.styles";
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
