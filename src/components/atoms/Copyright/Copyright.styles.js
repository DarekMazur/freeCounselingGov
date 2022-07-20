import styled from "styled-components";

export const StyledCopyright = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  font-family: ${({ theme }) => theme.fonts.secondaryHeaderFont};
  color: ${({ theme }) => theme.colors.red};

  a {
    color: inherit;
    text-decoration: none;

    &:visited,
    &:active {
      color: inherit;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;
