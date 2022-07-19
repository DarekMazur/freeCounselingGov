import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import HomeView from "../HomeView/HomeView";
import { theme } from "../../utils/theme";

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <ContentPovider> */}
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
        </Routes>
        {/* </ContentPovider> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
