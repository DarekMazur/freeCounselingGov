import MenuListItem from "../../atoms/MenuListItem/MenuListItem";
import FooterWrapper from "../../molecules/FooterWrapper/FooterWrapper";
import { StyledMenuList } from "../../molecules/MenuList/MenuList.styles";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  const menuData = [
    {
      title: "Polityka prywatności",
      link: "",
    },
    {
      title: "Kontakt",
      link: "",
    },
    {
      title: "Ankieta",
      link: "",
    },
    {
      title: "FAQ",
      link: "",
    },
  ];
  return (
    <StyledFooter>
      <StyledMenuList>
        {menuData.map((item) => (
          <MenuListItem item={item} />
        ))}
      </StyledMenuList>
      <FooterWrapper />
    </StyledFooter>
  );
};

export default Footer;
