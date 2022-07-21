import styled from 'styled-components';

export const StyledMenuListItem = styled.li`
  padding: 0 3rem;
  font-family: ${({ theme }) => theme.fonts.headerFont};

  svg {
    margin-right: 1rem;
  }

  @media screen and (max-width: 726px) {
    width: 8rem;

    span {
      display: ${({ isMain }) => (isMain ? 'none' : 'block')};
    }
  }
`;
