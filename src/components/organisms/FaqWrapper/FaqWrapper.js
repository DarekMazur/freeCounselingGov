import { Container } from "../../atoms/Container/Container.styles";
import TitleWrapper from "../../molecules/TitleWrapper/TitleWrapper";
import { faq } from "../../../data/faq";
import { Details } from "../../atoms/Details/Details";

const FaqWrapper = () => {
  return (
    <Container padding="3rem">
      <TitleWrapper
        title="Najczęściej zadawane pytania"
        subtitle="znajdź odpowiedź na swoje"
        icon={["fas", "circle-question"]}
      />
      <div>
        {faq.map((question) => (
          <Details key={question.question}>
            <summary>{question.question}</summary>
            {question.answer}
          </Details>
        ))}
      </div>
    </Container>
  );
};

export default FaqWrapper;
