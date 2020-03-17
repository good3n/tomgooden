import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    /* fonts */
    --font_heading: 'Helvetica Neue', 'Segoe UI', 'Roboto', 'sans-serif';
    --font_body: 'Lora', 'Georgia', 'sans-serif';

    /* colors */
    --color_heading: #37383c;
    --color_body: #6b7c93;
    --color_body-dark: #51637b;
    --color_blue: #456cac;
    --color_blue-light: #3d91f9;
    --color_gray-light: #f4f9ff;
    --color_gray-light2: #f6f9fc;
    --color_green-light: #e6f4f1;
    --color_purple: #636bb2;
  }

  html {
    background-color: ${props => props.theme.colors.background};
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.bodyText};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    transition: background-color 0.2s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.headingText};
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.bodyText};
  }

  main a {
    display: inline-block;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 5px;
      background: #caebf2;
      position: absolute;
      z-index: -1;
      bottom: 3px;
      right: 0;
      left: 0;
      transition: height 0.2s ease;
    }

    &:hover{
      color: #121212;

      &::before {
        height: calc( 100% - 8px );
      }
    }
  }

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

  code {

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

      &text {
        background: #eee !important;
        text-shadow: none;
        color: #343434;
      }
    }
  }

  @media (max-width: 899px) {
    pre[class*=language-] {
      padding: 2.5em 1.5em 1.5em;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 900px;
    padding: 0 15px;
  }
`

export default GlobalStyle
