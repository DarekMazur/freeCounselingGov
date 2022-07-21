import React from "react";
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
          <React.Fragment key={item.title}>
            <MenuListItem item={item} />
          </React.Fragment>
        ))}
      </StyledMenuList>
      <FooterWrapper />
    </StyledFooter>
  );
};

export default Footer;
