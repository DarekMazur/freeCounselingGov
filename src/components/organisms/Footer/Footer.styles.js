import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;
