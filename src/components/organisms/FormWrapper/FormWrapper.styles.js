import styled from "styled-components";

export const FormWrapper = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 4rem 5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 726px) {
    width: 95%;
  }
`;
