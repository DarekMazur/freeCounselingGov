import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const variables = {
  MS_LINK: "https://np.ms.gov.pl/",
  SUW_LINK: "https://www.kielce.uw.gov.pl/",
  SUW_FACEBOOK: "https://www.facebook.com/suw.kielce/",
};

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const setInitStorage = () => {
  let lang = "";
  let pop = false;

  if (
    window.localStorage.length <= 1 &&
    (navigator.language === "uk" ||
      navigator.language === "uk-UA" ||
      navigator.language === "ru-UA" ||
      navigator.language === "ru" ||
      navigator.language === "ru-RU" ||
      navigator.language === "en-US")
  ) {
    lang = navigator.language;
    window.localStorage.setItem("lang", lang);

    if (lang !== "") {
      pop = true;
      window.localStorage.setItem("isPopDisp", pop);
    }
  }
};
