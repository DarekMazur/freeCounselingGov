import { regions } from "../../../data/regions";
import Title from "../../atoms/Title/Title";
import ContactItem from "../../molecules/ContactItem/ContactItem";
import { StyledContactWrapper } from "./ContactWrapper.styles";

const ContactWrapper = () => {
  const govermentUnits = [
    {
      name: "Ministerstwo Sprawiedliwości",
      link: "https://www.gov.pl/web/nieodplatna-pomoc",
      email: "",
      phone: "",
    },
    {
      name: "Świętokrzyski Urząd Wojewódzki",
      link: "https://bip.kielce.uw.gov.pl/bip/nieodplatna-pomoc-prawn/19723,Nieodplatna-pomoc-prawna-informacje.html",
      email: "",
      phone: "",
    },
  ];
  return (
    <StyledContactWrapper>
      <Title title="Jednostki rządowe" isSubtitle isLeft />
      {govermentUnits.map((unit) => (
        <ContactItem item={unit} isGov />
      ))}

      <Title title="Starostwa powiatowe" isSubtitle isLeft />
      {regions.map((unit) => (
        <ContactItem item={unit} />
      ))}
    </StyledContactWrapper>
  );
};

export default ContactWrapper;
