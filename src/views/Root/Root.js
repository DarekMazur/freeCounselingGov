import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import HomeView from "../HomeView/HomeView";
import { theme } from "../../utils/theme";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <ContentPovider> */}
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
        </Routes>
        <Footer />
        {/* </ContentPovider> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
