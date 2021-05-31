import { createGlobalStyle } from 'styled-components'
import { Fonts } from '../fonts/fonts'

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
    --color_background: #fff;
    --color_body-text: #5d6770;
    --color_body-text--light: #b4b9be;
    --color_heading-text: #00171f;
    --color_link: rgba(136, 221, 255, 0.5);
    --color_border: rgba(0, 0, 0, 0.15);
    --color_dark-block: #353839;

    /* fonts */
    --font-size__extra-big-ass: 5.16rem;
    --font-size__big-ass: 3.583rem;
    --font-size__medium-ass: 2.488rem;
    --font-size__h1: 2.074rem;
    --font-size__h2: 1.728rem;
    --font-size__h3: 1.44rem;
    --font-size__h4: 1.2rem;
    --font-size__h5: 1rem;
    --font-size__base: 1rem;
    --font-size__small: 0.833rem;
  }

  ${Fonts}

  body {
    background-color: var(--color_background);
    color: var(--color_body-text);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  h1, h2, h3, h4, h5 {
    color: var(--color_heading-text);
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
    color: var(--color_body-text);
  }

  button,
  .button,
  a.button {
    background: var(--color_red);
    color: #fff;
    padding: 15px 40px;
    font-weight: 700;
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

    &--skinny {
      max-width: 1000px;
    }
  }
`

export default GlobalStyle
