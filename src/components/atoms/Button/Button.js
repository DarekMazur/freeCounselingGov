import { useState } from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ label, handleClick }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <StyledButton
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      onClick={handleClick}
    >
      <span>{label}</span>
      <span>Kliknij!</span>
    </StyledButton>
  );
};

export default Button;
