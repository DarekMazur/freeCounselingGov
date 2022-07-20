import { StyledTitle } from "./Title.styles";

const Title = ({ title, isSubtitle }) => {
  return (
    <StyledTitle>
      {isSubtitle ? <h3>{title}</h3> : <h2>{title}</h2>}
    </StyledTitle>
  );
};

export default Title;
