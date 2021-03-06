import styled from "styled-components";

export const StyledTitleIcon = styled.span`
  width: 8rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${({ theme }) => `1.5rem solid ${theme.colors.blue}`};
  padding-right: 2rem;
  margin-right: 2rem;
  color: ${({ theme }) => theme.colors.blue};

  svg {
    height: 6rem;
    width: 6rem;
  }

  @media screen and (max-width: 726px) {
    width: 2rem;
    padding-right: 1rem;
    margin-right: 1rem;

    svg {
      display: none;
    }
  }
`;
