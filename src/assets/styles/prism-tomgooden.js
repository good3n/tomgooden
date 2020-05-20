import { createGlobalStyle } from 'styled-components'

const GlobalPrismStyle = createGlobalStyle`

  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: ${props => props.theme.colors.codeBlockBackground};
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
   pre[class*='language-'] {
    padding: 3em;
    margin: 0.5em 0 3em;
    overflow: auto;
    border-radius: 0.3em;
  }

  /* :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${props => props.theme.colors.codeBlockBackground};
  } */

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    color: ${props => props.theme.colors.codeText};
    background: ${props => props.theme.colors.codeTextBackground};
    text-shadow: none;
    padding: 0.2em 0.4em;
    font-size: 0.75rem;
    border-radius: 0.2rem;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #777;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.parameter {
    color: #e863a6;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88ddff;
  }

  .token.keyword {
    color: #9192ff;
  }

  .token.regex,
  .token.important {
    /* color: #ff99ce; */
    color: #fff;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export default GlobalPrismStyle
