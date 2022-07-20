import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
  width: 20rem;
  height: 5rem;
  border: ${({ theme }) => `0.3rem solid ${theme.colors.red}`};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;

  &:visited,
  &:active {
    color: inherit;
  }

  span {
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform 0.1s ease-in-out;

    &:nth-child(1) {
      transform: translateY(
        ${({ isMouseOver }) => (isMouseOver ? "-100%" : "0")}
      );
    }

    &:nth-child(2) {
      transform: translateY(
        ${({ isMouseOver }) => (isMouseOver ? "0" : "100%")}
      );
    }
  }
`;
