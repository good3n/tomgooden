import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    color: #212121;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #121212;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    color: #121212;
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

    &:hover::before {
      height: calc( 100% - 8px );
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
      border-radius: 0.3em 0 0.3em 0;
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

      &text {
        background: #eee !important;
        text-shadow: none;
        color: #343434;
      }
    }
  }

  .is-sans {
    font-family: "Graphik", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", "sans-serif";
  }

  .is-serif {
    font-family: "Lora", "Georgia", "serif";
  }
`

export default GlobalStyle
