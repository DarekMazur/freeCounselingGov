import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledTitleIcon } from "./TitleIcons.styles";

const TitleIcon = ({ icon }) => {
  return (
    <StyledTitleIcon>
      <FontAwesomeIcon icon={icon} />
    </StyledTitleIcon>
  );
};

export default TitleIcon;
