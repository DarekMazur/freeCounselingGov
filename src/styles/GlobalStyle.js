import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Noto+Serif+Display:wght@500&family=Playfair+Display+SC&family=Sancreek&display=swap');

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.mainFont};
        color: ${({ theme }) => theme.colors.blak};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 2;
        width: 100vw;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.white};
        padding: 0;
        margin: 0;

        &::-webkit-scrollbar {
            width: 1rem;
            background-color: transparent;
        }
        
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.yellow};
        }
    }

    p {
        margin: 2.7rem 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.fonts.headerFont};
    }
`;
