import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import TitleIcon from "../../atoms/TitleIcon/TitleIcon";
import { StyledTitleWrapper } from "./TitleWrapper.styles";

const TitleWrapper = ({ handleClick, isOpen }) => {
  return (
    <>
      <StyledTitleWrapper>
        <TitleIcon />
        <div>
          <Title title="System nieodpłatnej pomocy" color="red" />
          <Title title="wszystko, co musisz wiedzieć" isSubtitle />
        </div>
      </StyledTitleWrapper>
      <Button
        label={isOpen ? "Zamknij" : "Dowiedz się wiecej"}
        handleClick={handleClick}
      />
    </>
  );
};

export default TitleWrapper;
