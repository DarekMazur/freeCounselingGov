import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 6rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.grey};
`;
