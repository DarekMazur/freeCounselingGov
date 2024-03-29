import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import HomeView from "../HomeView/HomeView";
import { theme } from "../../utils/theme";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import PrivacyView from "../PrivacyView/PrivacyView";
import { ScrollToTop, setInitStorage } from "../../utils/helpers";
import FaqView from "../FaqView/FaqView";
import ContactView from "../ContactView/ContactView";
import FormView from "../FormView/FormView";
import ContentPovider from "../../providers/ContentProvider";
import ResultsView from "../ResultsView/Resultsview";

const Root = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <ContentPovider>
          <GlobalStyle />
          {setInitStorage()}
          <Header />
          <Routes>
            <Route path="/privacy" element={<PrivacyView />} />
            <Route path="/faq" element={<FaqView />} />
            <Route path="/kontakt" element={<ContactView />} />
            <Route path="/form" element={<FormView />} />
            <Route path="/results" element={<ResultsView />} />
            <Route exact path="/" element={<HomeView />} />
          </Routes>
          <Footer />
        </ContentPovider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
