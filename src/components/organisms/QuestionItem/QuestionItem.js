const QuestionItem = ({ question, id, type, value }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`answer_${id}`}
        name={`answer_${id}`}
        value={value}
      />
      <label htmlFor={`answer_${id}`}>{question}</label>
    </div>
  );
};

export default QuestionItem;
