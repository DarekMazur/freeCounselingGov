import { Container } from "../../components/atoms/Container/Container.styles";
import TitleWrapper from "../../components/molecules/TitleWrapper/TitleWrapper";
import ContactWrappper from "../../components/organisms/ContactWrapper/ContactWrapper";

const ContactView = () => {
  return (
    <Container padding="3rem">
      <TitleWrapper title="Kontakt" subtitle="" icon={["fas", "at"]} />
      <ContactWrappper />
    </Container>
  );
};

export default ContactView;
