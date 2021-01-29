import styled from 'styled-components'

export const Hero = styled.div`
  margin: 11rem auto 16rem;
  text-align: center;

  @media (max-width: 899px) {
    margin: 5rem auto 7rem;
  }

  h1 {
    position: relative;
    font-size: 5.55rem;
    letter-spacing: -3px;
    margin-bottom: 7rem;

    @media (max-width: 899px) {
      font-size: 3.815rem;
    }

    span.block {
      display: block;
    }

    span.text {
      position: absolute;
      top: calc(100% - 1.5rem);
      right: 0;
      left: 0;
      z-index: 1;
      white-space: nowrap;

      @media (max-width: 899px) {
        top: calc(100% - 1rem);
      }

      > span {
        position: relative;

        &:after {
          content: '';
          height: 10px;
          width: 100%;
          background-color: var(--color_red); // fallback
          animation-name: underline-color;
          animation-duration: 5s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          position: absolute;
          bottom: 22px;
          right: 0;
          left: 0;
          z-index: -1;

          @media (max-width: 899px) {
            bottom: 13px;
          }
        }
      }
    }

    span.react-rotating-text-cursor {
      position: absolute;
      font-weight: normal;
      animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
        infinite;
    }
  }

  p {
    font-size: var(--font-size__h3);

    @media (max-width: 899px) {
      font-size: var(--font-size__base);
    }
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes underline-color {
    0% {
      background-color: var(--color_red);
    }
    25% {
      background-color: var(--color_yellow);
    }
    75% {
      background-color: var(--color_blue);
    }
    100% {
      background-color: var(--color_red);
    }
  }
`

export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    padding: 90px 80px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 899px) {
      padding: 70px 60px;
    }

    &:nth-of-type(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      background-color: var(--color_red);
      color: #fff;

      @media (max-width: 1175px) {
        grid-column: 1 / 5;
        grid-row: 1 / 2;
      }

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(2) {
      grid-column: 3 / 5;
      grid-row: 1 / 2;
      background-color: var(--color_blue);
      color: #fff;

      @media (max-width: 1175px) {
        grid-column: 1 / 5;
        grid-row: 2 / 3;
      }

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(3) {
      background-color: var(--color_offWhite);
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      color: var(--color_text--heading);

      @media (max-width: 1175px) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }

      @media (max-width: 600px) {
        grid-column: 1 / 5;
      }

      h2 {
        color: var(--color_text--heading);
      }
    }

    &:nth-of-type(4) {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
      background-color: var(--color_yellow);
      color: var(--color_text--heading);

      @media (max-width: 1175px) {
        grid-column: 3 / 5;
        grid-row: 3 / 4;
      }

      @media (max-width: 600px) {
        grid-column: 1 / 5;
        grid-row: 4 / 5;
      }

      h2 {
        color: var(--color_text--heading);
      }
    }
  }

  h2 {
    display: flex;
    align-items: center;
    margin-top: 0;
  }

  svg {
    width: 40px;
    margin-right: 30px;
  }

  p {
    clear: both;
    margin: 0;
    font-weight: 500;
  }
`

export const Roadmap = styled.div`
  background-color: ${props => props.theme.colors.darkBlock};
  padding: 130px 0;
  overflow: hidden;
  color: var(--color_offWhite);

  > div:first-of-type {
    margin: 0 auto;
    max-width: 700px;

    @media (max-width: 1175px) {
      max-width: 100%;
      padding: 0 90px;
    }

    @media (max-width: 899px) {
      padding: 0 60px;
    }

    @media (max-width: 600px) {
      padding: 0 30px;
    }
  }

  h2 {
    color: var(--color_offWhite);
    margin-top: 0;
  }

  .container {
    position: relative;
    margin-top: 90px;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: -60px;
      left: 90px;

      @media (max-width: 1175px) {
        top: -175px;
      }

      @media (max-width: 899px) {
        left: 60px;
      }

      @media (max-width: 600px) {
        left: 30px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      position: relative;

      @media (max-width: 1175px) {
        grid-template-columns: 1fr 1fr;
        padding-right: 30px;
        padding-left: 30px;
      }

      @media (max-width: 600px) {
        padding-right: 0;
        padding-left: 0;
      }
    }

    li {
      margin: 0;
      display: block;
    }

    h3 {
      margin: 0;
      font-weight: 600;
      font-size: var(--font-size__h5);
      color: var(--color_offWhite);
    }

    p {
      margin: 90px 0 0;
      font-size: var(--font-size__small);
      opacity: 0.7;

      @media (max-width: 1175px) {
        margin-top: 20px;
      }
    }
  }
`

export const Cta = styled.div`
  text-align: center;
  padding: 110px 0 60px;

  @media (max-width: 600px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  h2 {
    margin-top: 0;
  }

  .card {
    display: inline-block;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: var(--font-size__small);
    background-color: var(--color_red);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;

    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }

    a {
      color: #fff;
      padding: 15px 30px;
      display: block;
    }
  }
`
