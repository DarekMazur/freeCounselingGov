import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"/></svg>');
      width: 2rem;
      height: 2rem;
      position: absolute;
      left: -3rem;
      top: 1rem;
      transform-origin: center;
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
    color: ${({ theme }) => theme.colors.white};
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
