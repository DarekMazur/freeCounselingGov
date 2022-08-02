import ResultsWrapper from "../../../components/ResultsWrapper/ResultsWrapper";
import npp from "../../../assets/images/npp.jpg";
import npo from "../../../assets/images/npo.jpg";
import nm from "../../../assets/images/nm.jpg";
import unknown from "../../../assets/images/unknown.jpg";

import { useContext } from "react";
import ContentPovider from "../../providers/ContentProvider";
import { faq } from "../../data/faq";

const ResultsView = () => {
  const { globalCount, globalValue } = useContext(ContentPovider);

  const value = globalValue / globalCount;
  const resultObj = {};
  const values = [10 / 8, 10 / 6, 10 / 4];
  const output = values.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );

  if (output === 10 / 8 || globalCount === 18) {
    resultObj.image = npp;
    resultObj.title = "Nieodpłatna Pomoc Prawna";
    resultObj.description = faq[0].answer;
  } else if (output === 10 / 6) {
    resultObj.image = npo;
    resultObj.title = "Nieodpłatne Poradnictwo Obywatelskie";
    resultObj.description = faq[1].answer;
  } else if (output === 10 / 4) {
    resultObj.image = nm;
    resultObj.title = "Nieodpłatna Mediacja";
    resultObj.description = faq[2].answer;
  }

  return (
    <>
      {globalValue !== 0 ? (
        <ResultsWrapper
          image={resultObj.image}
          result={resultObj.title}
          description={resultObj.description}
        />
      ) : (
        <ResultsWrapper image={unknown} result="unknown" />
      )}
    </>
  );
};

export default ResultsView;
