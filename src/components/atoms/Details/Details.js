import styled, { keyframes } from "styled-components";

const showBox = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const showContent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
`;

export const Details = styled.details`
  width: 80%;
  margin: 4rem 3rem;
  position: relative;

  summary {
    font-size: 2rem;
    list-style: none;
    cursor: pointer;

    &::after {
      content: ">";
      position: absolute;
      left: -3rem;
      transition: transform 0.2s ease-in-out;
      transform: rotate(90deg);
    }

    &:focus-visible {
      outline: ${({ theme }) => `0.3rem solid ${theme.colors.blue}`};
    }
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }

  &[open] > div {
    display: block;
  }

  & > div {
    display: none;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.3s ease-in-out 1 forwards ${showBox};
    margin: 2rem 0;
    padding: 2rem 4rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.yellow};
    border-left: ${({ theme }) => `1rem solid ${theme.colors.red}`};

    div {
      opacity: 0;
      transform: translateX(-2%);
      animation: 0.2s 0.4s ease-in 1 forwards ${showContent};
    }
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      summary::-webkit-details-marker {
        display: none;
      }

      summary:focus {
        outline: ${({ theme }) => `0.3rem solid ${theme.colors.blue}`};
      }
    }
  }
`;
