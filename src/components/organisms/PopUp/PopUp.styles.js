import styled from "styled-components";

export const StyledPopUpWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  top: 0;
  bottom: left;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: white;
    z-index: -1;
    opacity: 0.8;
  }

  div {
    width: 50%;
    height: 70%;
    overflow-y: auto;
    background: white;
    padding: 2rem;
    border: 0.2rem solid grey;
  }

  button {
    position: absolute;
    top: 16%;
    right: 27%;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize.l};
    background: transparent;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 726px) {
    div {
      width: 80%;
      height: 90%;
    }

    button {
      top: 5%;
      right: 10%;
    }
  }
`;
