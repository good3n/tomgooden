import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
    /* colors */
    --color_red: #FC0055;
    --color_blue: #56CBF9;
    --color_yellow: #FFEA9F;
    --color_green: #06D6A0;
    --color_dark: #353839;
    --color_offWhite: #fbf7f2;
    --color_text--light: #b4b9be;
    --color_text--base: #353839;
    --color_text--heading: #00171f;

    /* theme */
    --color__base: #646C76;
    --color__background: #fff;
    --color__headline: #1F1E4E;
  
    --color__base--light: #b4b9be;
    --color_link: rgba(136, 221, 255, 0.5);
    --color_border: rgba(0, 0, 0, 0.15);
    --color_dark-block: #353839;

    /* fonts */
    --font-size__h0: 5.96rem;
    --font-size__h1: 3.052rem;
    --font-size__h2: 2.441rem;
    --font-size__h3: 1.953rem;
    --font-size__h4: 1.563rem;
    --font-size__h5: 1.25rem;
    --font-size__base: 1rem;
    --font-size__base--lg: 1.167rem;
    --font-size__base--sm: 0.889rem;

    --font-family__heading: "Inter", sans-serif;
    --font-family__body: "Inter", sans-serif;
    --font-family__code: "Fira Code", monospace;

    /* margins */
    --margin: 2.074rem 0 1rem;
  }

  html {
    font-size: 112.5%; /* 18px */

    @media (max-width: 999px) {
      font-size: 100% /* 16px */
    }
  }

  body {
    background: var(--color__background);
    color: var(--color__base);
    font-family: var(--font-family__body);
    line-height: 1.75;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.2s ease, color 0.2s ease;

    &.not-found {
      background-color: #D5E9F6;
    }
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    color: var(--color__headline);
    font-family: var(--font-family__heading);
    font-weight: 900;
    line-height: 1.3;
    letter-spacing: -0.025em;
  }

  h1 {
    margin-top: 0;
    font-size: var(--font-size__h1);
  }

  h2 {
    font-size: var(--font-size__h2);
  }

  h3 {
    font-size: var(--font-size__h3);
  }

  h4 {
    font-size: var(--font-size__h4);
  }

  h5 {
    font-size: var(--font-size__h5);
  }

  small,
  .text-small {
    font-size: var(--font-size__small);
  }

  .subheader {
    font-size: var(--font-size__base--sm);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5em;
  }

  p {
    margin-bottom: 1rem;

    strong {
      color: var(--color__headline);
    }
  }

  a {
    text-decoration: none;
    color: var(--color__headline);
  }

  button,
  .button,
  a.button {
    display: inline-block;
    background: #f52d86;
    color: #fff;
    padding: 0 50px;
    font-weight: 700;
    line-height: 2.441rem;
    height: 2.441rem;
    border-radius: 8px;
    border: none;
    outline: 0;
    cursor: pointer;
  }

  blockquote {
    border-left: 5px solid #e863a6;
    margin: 2.074rem auto;
    padding: 2.074rem;
    background: #f7f7f7;
    color: #444;
    font-size: var(--font-size__h4);
  }

  del {
    color: var(--color__base);
  }

  /* code */
  .gatsby-highlight {
    position: relative;
  }

  .container {
    margin: 0 auto;
    max-width: 1060px;
    padding-right: 30px;
    padding-left: 30px;

    @media (max-width: 999px) {
      max-width: 100%;
    }
  }
`

export default GlobalStyle
