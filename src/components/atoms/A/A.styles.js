import styled from "styled-components";

export const A = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme, isYellow }) =>
    isYellow ? theme.colors.yellow : theme.colors.grey};
`;
