import styled from 'styled-components';

export const StyledMenuList = styled.ul`
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  list-style: none;
  margin: 0 2rem 0 0;
  padding: 0;

  @media screen and (max-width: 726px) {
    flex-direction: row;
  }
`;
