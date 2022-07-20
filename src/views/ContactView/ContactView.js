import { Container } from "../../components/atoms/Container/Container.styles";
import TitleWrapper from "../../components/molecules/TitleWrapper/TitleWrapper";

const ContactView = () => {
  return (
    <Container padding="3rem">
      <TitleWrapper title="Kontakt" subtitle="" icon={["fas", "at"]} />
    </Container>
  );
};

export default ContactView;
