import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import HomeView from "../HomeView/HomeView";
import { theme } from "../../utils/theme";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import PrivacyView from "../PrivacyView/PrivacyView";
import ScrollToTop from "../../utils/helpers";
import FaqView from "../FaqView/FaqView";

const Root = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        {/* <ContentPovider> */}
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/privacy" element={<PrivacyView />} />
          <Route path="/faq" element={<FaqView />} />
          <Route exact path="/" element={<HomeView />} />
        </Routes>
        <Footer />
        {/* </ContentPovider> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
