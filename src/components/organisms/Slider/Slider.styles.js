import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;
  left: -50vw;
  width: 150vw;
  display: flex;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 726px) {
    flex-direction: column-reverse;
    left: 0;
  }
`;
