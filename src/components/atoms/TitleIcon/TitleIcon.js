import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledTitleIcon } from "./TitleIcons.styles";

const TitleIcon = () => {
  return (
    <StyledTitleIcon>
      <FontAwesomeIcon icon={["fas", "scale-balanced"]} />
    </StyledTitleIcon>
  );
};

export default TitleIcon;
