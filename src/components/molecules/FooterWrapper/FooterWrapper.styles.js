import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 726px) {
    flex-direction: column;
  }
`;
