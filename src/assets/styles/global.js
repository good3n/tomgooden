import { createGlobalStyle } from 'styled-components'
import { Fonts } from '../fonts/fonts'

const GlobalStyle = createGlobalStyle`

  :root {
    /* colors */
    --color_red: #FC0055;
    --color_blue: #56CBF9;
    --color_yellow: #FFEA9F;
    --color_dark: #353839;
    --color_offWhite: #fbf7f2;
    --color_text--light: #b4b9be;
    --color_text--base: #353839;
    --color_text--heading: #00171f;

    /* fonts */
    --font-size__base: 1rem;
    --font-size__small: 0.833rem;
    --font-size__h1: 2.074rem;
    --font-size__h2: 1.728rem;
    --font-size__h3: 1.44rem;
    --font-size__h4: 1.2rem;
    --font-size__h5: 1rem;
  }

  ${Fonts}

  html {
    background-color: ${props => props.theme.colors.background};
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.bodyText};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.2s ease;
  }

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.colors.headingText};
    font-weight: 900;
    line-height: 1.3;
    margin: 3rem 0 1.38rem;
  }

  h1,
  .h1 {
    margin-top: 0;
    font-size: var(--font-size__h1);
  }

  h2,
  .h2 {
    font-size: var(--font-size__h2);
  }

  h3,
  .h3 {
    font-size: var(--font-size__h3);
  }

  h4,
  .h4 {
    font-size: var(--font-size__h4);
  }

  h5,
  .h5 {
    font-size: var(--font-size__h5);
  }

  small,
  .text-small {
    font-size: var(--font-size__small);
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.bodyText};
  }

  /* main a {
    display: inline-block;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      width: 100%;
      height: 4px;
      background: ${props => props.theme.colors.link};
      position: absolute;
      bottom: 3px;
      right: 0;
      left: 0;
      z-index: -1;
      transition: height 0.2s ease;
    }

    &:hover::before {
      height: calc( 100% - 8px );
    }
  } */

  blockquote {
    border-left: 5px solid #e863a6;
    margin: 50px auto;
    padding: 40px;
    background: #f7f7f7;
    color: #444;
    font-size: 21px;
  }

  /* code */
  .gatsby-highlight {
    position: relative;
  }

  /* code {

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 10px;
      border-radius: 0.2em 0 0.3em 0;
      color: #121212;
      text-shadow: none;
    }

    &.language- {
      &css::before {
        content: "css";
        background: #ff79c6;
      }
      &html::before {
        content: "html";
        background: #88ddff;
      }
      &js::before {
        content: "js";
        background: #f7df1e;
      }
      &php::before {
        content: "php";
        background: #9192ff;
      }

      &jsx::before {
        content: "jsx";
        background: #E7F45E;
      }
    }
  } */

  @media (max-width: 899px) {
    pre[class*=language-] {
      padding: 2.5em 1.5em 1.5em;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1300px;
    padding-right: 90px;
    padding-left: 90px;

    @media (max-width: 1175px) {
      max-width: 100%;
    }

    @media (max-width: 899px) {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
`

export default GlobalStyle
