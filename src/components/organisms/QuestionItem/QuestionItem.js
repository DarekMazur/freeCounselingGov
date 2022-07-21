import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../../../providers/ContentProvider";
import { StyledQuestionItem } from "./QuestionItem.styles";

const QuestionItem = ({ question, id, type, value }) => {
  const { getGlobalValue, getGlobalCount } = useContext(ContentContext);
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (count === 0) {
      getGlobalCount(false);
      getGlobalValue(value, false);
    } else {
      getGlobalCount(true);
      getGlobalValue(count, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleOnClick = (e) => {
    if (e.target.checked !== undefined) {
      if (e.target.checked) {
        setCount(count + Number(e.target.value));
        setIsChecked(true);
      } else {
        setCount(count - Number(e.target.value));
        setIsChecked(false);
      }
    }
  };

  return (
    <StyledQuestionItem onClick={handleOnClick} isChecked={isChecked}>
      <input
        type="checkbox"
        id={`answer_${id}`}
        name={`answer_${id}`}
        value={value}
      />
      <label htmlFor={`answer_${id}`}>{question}</label>
    </StyledQuestionItem>
  );
};

export default QuestionItem;
