import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentYear, variables } from "../../../utils/helpers";
import { StyledCopyright } from "../../atoms/Copyright/Copyright.styles";
import Logo from "../../atoms/Logo/Logo";
import { StyledSocialLIstItem } from "../../atoms/SocialListItem/SocialListItem.styles";
import { StyledMenuList } from "../MenuList/MenuList.styles";
import { StyledFooterWrapper } from "./FooterWrapper.styles";

const FooterWrapper = () => {
  return (
    <StyledFooterWrapper>
      <StyledMenuList isColumn>
        <StyledSocialLIstItem>
          <a
            href="https://www.facebook.com/suw.kielce/"
            target="_blank"
            rel="noreferrer"
            isYellow
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        </StyledSocialLIstItem>
        <StyledSocialLIstItem>
          <a
            href="https://twitter.com/SwietokrzyskiW/"
            target="_blank"
            rel="noreferrer"
            isYellow
          >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
        </StyledSocialLIstItem>
      </StyledMenuList>
      <StyledCopyright>
        {getCurrentYear()} &copy;&nbsp;
        <a href={variables.SUW_LINK} target="_blanc">
          Świętokrzyski Urząd Wojewódzki
        </a>
      </StyledCopyright>
      <Logo />
    </StyledFooterWrapper>
  );
};

export default FooterWrapper;
