import styled from 'styled-components';

export const SliderSection = styled.div`
  width: 50vw;
  height: calc(100vh - 9.5rem);
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => (align ? align : 'center')};
  align-items: center;
  overflow-y: auto;
  background: ${({ image }) =>
    image ? `url(${image}) no-repeat center center/cover` : 'initial'};
  color: ${({ color, theme }) => (color ? theme.colors[color] : 'initial')};
  padding: 2rem;

  &::-webkit-scrollbar {
    width: 1rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (max-width: 726px) {
    width: 100vw;
    height: auto;

    button {
      display: ${({ wideOnly }) => (wideOnly ? 'none' : 'block')};
    }
  }
`;
