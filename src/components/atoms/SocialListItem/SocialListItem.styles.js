import styled from 'styled-components';

export const StyledSocialLIstItem = styled.li`
  color: ${({ theme }) => theme.colors.blue};
  svg {
    height: 2.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:visited,
    &:active {
      color: inherit;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  @media screen and (max-width: 726px) {
    margin: 0.5rem;
  }
`;
