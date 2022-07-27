import { useContext } from "react";
import { ContentContext } from "../../../providers/ContentProvider";
import { StyledPopUpWrapper } from "./PopUp.styles";

const PopUp = () => {
  const { popupStatus, getPopupStatus } = useContext(ContentContext);

  return (
    <>
      {console.log(typeof popupStatus)}
      {popupStatus === "true" ? (
        <StyledPopUpWrapper>
          <button onClick={() => getPopupStatus(false)}>X</button>
          <div>
            <h3>
              Комунікація для біженців війни з України та українців, які
              проживають в Польщі
            </h3>
            <p>
              У зв’язку зі зростанням напливу біженців від війни на територію
              Республіки Польща з України, яка захищається від російського
              вторгнення, Міністерство Юстиції Польщі зазначає, що до диспозицї
              всіх осіб перебуваючих в Польщі, в тим також іноземців,
              залишається система безоплатної допомоги, яка діє відповідно до
              Закону від 5 серпня 2015 р. про безоплатну правову допомогу,
              безоплатні консульації громадянські і правової освіти (Вісник
              законів 2021 року, ст. 945, далі: «Закон»). Кожен, хто не може
              оплатити витрати на оплачувану юридичну допомогу, має право на
              допомогу.
            </p>
          </div>
        </StyledPopUpWrapper>
      ) : null}
    </>
  );
};

export default PopUp;
