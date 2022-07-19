import { getCurrentYear, variables } from "../../../utils/helpers";

const Footer = () => {
  return (
    <footer>
      {getCurrentYear()} &copy;&nbsp;
      <a href={variables.SUW_LINK} target="_blanc">
        Świętokrzyski Urząd Wojewódzki
      </a>
    </footer>
  );
};

export default Footer;
