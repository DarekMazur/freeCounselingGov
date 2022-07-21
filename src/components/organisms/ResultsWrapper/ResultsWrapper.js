import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { ResultDescription } from '../../atoms/ResultDescription/ResultDescription.styles';
import { ResultsParagraph } from '../../atoms/ResultsParagraph/ResultsParagraph.styles';
import { StyledResults } from './ResultsWrapper.styles';

const ResultsWrapper = ({ image, result, description }) => {
  return (
    <>
      <StyledResults>
        <ResultsParagraph>
          {result === 'unknown'
            ? `Nie zaznaczono żadnych opcji...`
            : `Najlepsza dla Ciebie forma pomocy to ${result}`}
        </ResultsParagraph>
        <img src={image} alt="" />
        <ResultDescription>{description}</ResultDescription>
        <Link to="/form">
          <Button label="Wróć" />
        </Link>
      </StyledResults>
    </>
  );
};

export default ResultsWrapper;
