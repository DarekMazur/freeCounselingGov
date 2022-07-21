import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentYear, variables } from "../../../utils/helpers";
import { A } from "../../atoms/A/A.styles";
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
          <A
            href="https://www.facebook.com/suw.kielce/"
            target="_blank"
            rel="noreferrer"
            isYellow
          >
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </A>
        </StyledSocialLIstItem>
        <StyledSocialLIstItem>
          <A
            href="https://twitter.com/SwietokrzyskiW/"
            target="_blank"
            rel="noreferrer"
            isYellow
          >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </A>
        </StyledSocialLIstItem>
      </StyledMenuList>
      <StyledCopyright>
        {getCurrentYear()} &copy;&nbsp;
        <A href={variables.SUW_LINK} target="_blanc">
          Świętokrzyski Urząd Wojewódzki
        </A>
      </StyledCopyright>
      <Logo />
    </StyledFooterWrapper>
  );
};

export default FooterWrapper;
