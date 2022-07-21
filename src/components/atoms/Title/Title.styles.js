import styled from 'styled-components';

export const StyledTitle = styled.div`
  padding: 0;
  margin: 0;
  text-align: ${({ isLeft }) => (isLeft ? 'left' : 'center')};
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: ${({ theme }) => theme.fontSize.xxl};
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: ${({ theme }) => theme.fontSize.xl};
  }

  @media screen and (max-width: 726px) {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      line-height: ${({ theme }) => theme.fontSize.xl};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
