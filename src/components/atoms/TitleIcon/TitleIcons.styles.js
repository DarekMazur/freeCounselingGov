import styled from "styled-components";

export const StyledTitleIcon = styled.span`
  width: 8rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${({ theme }) => `1rem solid ${theme.colors.blue}`};

  svg {
    height: 6rem;
    width: 6rem;
  }
`;
