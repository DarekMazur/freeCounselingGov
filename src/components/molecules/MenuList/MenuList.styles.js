import styled from "styled-components";

export const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  list-style: none;
  margin: 0;
  padding: 0;
`;
