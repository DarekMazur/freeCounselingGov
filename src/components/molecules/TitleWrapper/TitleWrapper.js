import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import TitleIcon from "../../atoms/TitleIcon/TitleIcon";
import { TitleContent } from "../TitleContent/TitleContent.styles";
import { StyledTitleWrapper } from "./TitleWrapper.styles";

gsap.registerPlugin(ScrollTrigger);

const TitleWrapper = ({
  handleClick,
  isOpen,
  title,
  subtitle,
  icon,
  isButton,
}) => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current.children,
      { x: "-=150%", autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3",
        stagger: 0.1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center+=100px",
        },
      }
    );
  }, []);

  return (
    <>
      <StyledTitleWrapper>
        <TitleIcon icon={icon} />
        <TitleContent ref={titleRef}>
          <Title title={title} color="red" />
          <Title title={subtitle} isSubtitle />
        </TitleContent>
      </StyledTitleWrapper>
      {isButton ? (
        <Button
          label={isOpen ? "Zamknij" : "Dowiedz się wiecej"}
          handleClick={handleClick}
        />
      ) : null}
    </>
  );
};

export default TitleWrapper;
