import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? padding : "0")};
`;
