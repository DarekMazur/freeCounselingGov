import Button from "../../atoms/Button/Button";
import { Container } from "../../atoms/Container/Container.styles";
import { SliderSection } from "../../molecules/SliderSection/SliderSection.styles";
import TitleWrapper from "../../molecules/TitleWrapper/TitleWrapper";
import { SliderWrapper } from "./Slider.styles";
import Title from "../../atoms/Title/Title";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import background from "../../../assets/images/law.jpg";
import choice from "../../../assets/images/choice.jpg";
import { A } from "../../atoms/A/A.styles";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(null);
  const titleRef = useRef(null);
  const switchRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to([titleRef.current, switchRef.current, contentRef.current], {
      x: "+=50vw",
      duration: 0.5,
      stagger: 0.05,
    });
  }, []);

  const handleClick = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <SliderWrapper>
        <SliderSection
          image={background}
          color={"white"}
          ref={contentRef}
          align="top"
        >
          <h3>Program nieodpłatnej pomocy</h3>
          <p>
            Na system nieodpłatnej pomocy składa się{" "}
            <b>nieodpłatna pomoc prawna</b>,{" "}
            <b>nieodpłatne poradnictwo obywatelskie</b> oraz{" "}
            <b>nieodpłatna mediacja</b>. Jest to inicjatywa społeczna, mająca
            zapewnić wszystkim mieszkańcom Polski równy dostęp do wymiaru
            sprawiedliwości. Kierowana jest zarówno do osób prywatnych, których
            sytuacja życiowa i materialna uniemożliwia skorzystanie z odpłatnych
            usług prawnika, jak i do przedsiębiorców prowadzących jednoosobową
            działalność gospodarczą. System nieodpłatnej pomocy funkcjonuje w
            ponad <b>1500 punktach na terenie całej Polski</b>. Listę
            funkcjonujących punktów można znaleźć{" "}
            <A
              href="https://zapisy-np.ms.gov.pl/"
              target="_blank"
              rel="noreferrer"
              isYellow
            >
              tutaj
            </A>
            .
          </p>
          <p>Na poradę można zapisać się:</p>
          <ul>
            <li>
              telefonicznie – dzwoniąc na dedykowany numer wyznaczony przez
              powiat;
            </li>
            <li>
              elektronicznie – pisząc na podany przez powiat adres e-mail lub
              zapisując się przy pomocy formularza dostępnego na{" "}
              <A
                href="https://zapisy-np.ms.gov.pl/"
                target="_blank"
                rel="noreferrer"
                isYellow
              >
                stronie
              </A>
              ;
            </li>
            <li>osobiście w starostwie powiatowym.</li>
          </ul>
          <p>
            Jeśli nie jesteś pewien, jakiego rodzaju pomocy potrzebujesz -
            wypełnij krótką ankietę, która pomoże znaleźć odpowiednie
            rozwiąznie.
          </p>
          <h3>
            Комунікація для біженців війни з України та українців, які
            проживають в Польщі
          </h3>
          <p>
            У зв’язку зі зростанням напливу біженців від війни на територію
            Республіки Польща з України, яка захищається від російського
            вторгнення, Міністерство Юстиції Польщі зазначає, що до диспозицї
            всіх осіб перебуваючих в Польщі, в тим також іноземців, залишається
            система безоплатної допомоги, яка діє відповідно до Закону від 5
            серпня 2015 р. про безоплатну правову допомогу, безоплатні
            консульації громадянські і правової освіти (Вісник законів 2021
            року, ст. 945, далі: «Закон»). Кожен, хто не може оплатити витрати
            на оплачувану юридичну допомогу, має право на допомогу.
          </p>
          <p>
            Очевидно, що пропозиція безкоштовної системи доступна в першу чергу
            людям, які володіють польською мовою. Однак не суперечить положенням
            Закону відвідування пункту за допомогою перекладача, а також надання
            консультацій за допомогою засобів дистанційного зв’язку. Наразі
            Міністерство Юстиції Польщі збирає інформацію про наявність послуг
            безкоштовної допомоги українською, російською та англійською мовами
            у всіх пунктах допомоги, працює над можливістю збільшення робочого
            часу спеціаліста у сфері прав іноземців у пунктах безоплатної
            допомоги. Детальну інформацію про систему безкоштовної допомоги
            можна знайти в інформаційному буклеті, який містить основні
            відомості про те, як отримати допомогу.
          </p>
        </SliderSection>
        <SliderSection color="blue" ref={switchRef}>
          <TitleWrapper
            title="System nieodpłatnej pomocy"
            subtitle="wszystko, co musisz wiedzieć"
            icon={["fas", "scale-balanced"]}
            handleClick={handleClick}
            isOpen={isOpen}
            isButton
          />
        </SliderSection>
        <SliderSection color="white" ref={titleRef} image={choice}>
          <Title
            isSubtitle
            title="Zobacz jaki rodzaj pomocy będzie dla ciebie najlepszy"
          />
          <Button label="Ankieta" />
        </SliderSection>
      </SliderWrapper>
    </Container>
  );
};

export default Slider;
