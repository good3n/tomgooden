import styled from 'styled-components'

export const Home = styled.div`
  .container {
    position: relative;
    padding-top: 5rem;

    @media (max-width: 1119px) {
      padding-top: 8vw;
    }

    > div:first-of-type {
      position: relative;
      z-index: 1;
      padding-right: 23%;

      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        padding-right: 0;
      }
    }
  }

  .type {
    margin: 0;
    font-family: var(--font-family__code);
    font-size: var(--font-size__base--sm);
    font-weight: 600;
    letter-spacing: 0.1em;

    @media (max-width: 700px) {
      order: 2;
      font-size: 2.1vw;
    }
  }

  h2 {
    font-size: var(--font-size__h0);

    @media (max-width: 1119px) {
      font-size: 9.6vw;
      margin: 0.5em 0;
    }

    @media (max-width: 800px) {
      font-size: 8.5vw;
    }

    @media (max-width: 700px) {
      order: 1;
      margin: 1.2em 0 0.4em;
    }
  }

  h1 {
    font-size: var(--font-size__base--lg);
    color: var(--color__base);
    font-weight: normal;
    letter-spacing: 0;
    margin: 0 0 1rem;
    line-height: 1.75;

    @media (max-width: 999px) {
      font-size: var(--font-size__base);
    }

    @media (max-width: 700px) {
      order: 4;
    }
  }

  .image-wrap {
    width: 657px;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 1119px) {
      width: 58.8vw;
    }

    svg {
      width: 100%;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: -54px;
      right: 90px;

      @media (max-width: 1119px) {
        width: 44.7vw !important;
        top: -4.8vw;
        right: 8vw;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5em;
    margin: 3rem 0;
    font-size: var(--font-size__base--sm);

    @media (max-width: 999px) {
      font-size: 1.6vw;
      margin: 7vw 0;
    }

    @media (max-width: 700px) {
      order: 3;
      align-items: center;
      font-size: 2vw;
    }

    svg {
      width: 16px;
      height: 16px;
      margin: 0 2.3em;
      flex-grow: 1;

      @media (max-width: 700px) {
        margin: 0;
        height: 8px;
        width: 8px;
      }
    }
  }
`
