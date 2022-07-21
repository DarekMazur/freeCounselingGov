import Button from "../../components/atoms/Button/Button";
import { Container } from "../../components/atoms/Container/Container.styles";
import Title from "../../components/atoms/Title/Title";
import TitleWrapper from "../../components/molecules/TitleWrapper/TitleWrapper";
import { Wrapper } from "../../components/molecules/Wrapper/Wrapper.styles";
import QuestionItem from "../../components/organisms/QuestionItem/QuestionItem";
import { questions } from "../../data/questions";

const FormView = () => {
  return (
    <Container padding="3rem">
      <TitleWrapper
        title="Rodzaj pomocy"
        subtitle="sprawdź, czego potrzebujesz"
        icon={["fas", "signs-post"]}
      />
      <Wrapper>
        <Title
          title="Zaznacz zagadnienia, które Cię dotyczą"
          isSubtitle
          isLeft
        />
        <div>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              id={question.id}
              type={question.type}
              question={question.question}
              value={question.value}
            />
          ))}
        </div>
        <Button label="Wyślij" />
      </Wrapper>
    </Container>
  );
};

export default FormView;
