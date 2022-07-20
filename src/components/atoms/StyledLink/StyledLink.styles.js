import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};

  &.active {
    border-bottom: ${({ theme, isMain }) =>
      isMain ? `0.5rem solid ${theme.colors.blue}` : "0"};
  }
`;
