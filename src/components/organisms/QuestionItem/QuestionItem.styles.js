import styled from "styled-components";

export const StyledQuestionItem = styled.div`
  min-height: 20vh;
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey}`};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.yellow : "transparent"};

  &:nth-of-type(odd) {
    border-left: ${({ theme }) => `.2rem solid ${theme.colors.grey}`};
  }

  &:nth-of-type(even) {
    border-right: ${({ theme }) => `.2rem solid ${theme.colors.grey}`};
  }

  & > input[type="checkbox"] {
    appearance: none;
  }

  & > label {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  @media screen and (max-width: 726px) {
    width: 100%;
  }
`;
