import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { A } from "../../atoms/A/A.styles";
import { ListItem } from "../../atoms/ListItem/ListItem.styles";
import { StyledContactItem } from "./ContactItem.styles";

const ContactItem = ({ item }) => {
  return (
    <StyledContactItem>
      <h4>{item.name}</h4>
      <ul>
        <ListItem>
          <A href={item.link} target="_blank" rel="noreferrer" isYellow>
            <FontAwesomeIcon icon={["fas", "link"]} /> strona www
          </A>
        </ListItem>
        {item.email !== "" ? (
          <ListItem>
            <A
              href={`mailto: ${item.email}`}
              target="_blank"
              rel="noreferrer"
              isYellow
            >
              <FontAwesomeIcon icon={["fas", "at"]} /> {item.email}
            </A>
          </ListItem>
        ) : null}
        {item.phone !== "" ? (
          <ListItem>
            <A
              href={`tel: ${item.phone}`}
              target="_blank"
              rel="noreferrer"
              isYellow
            >
              <FontAwesomeIcon icon={["fas", "phone"]} /> {item.phone}
            </A>
          </ListItem>
        ) : null}
      </ul>
    </StyledContactItem>
  );
};

export default ContactItem;
