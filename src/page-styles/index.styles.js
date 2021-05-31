import styled from 'styled-components'

export const Hero = styled.div`
  padding: 10rem 0 12rem;
  text-align: center;

  @media (max-width: 899px) {
    margin: 0;
    padding: 7rem 30px;
  }

  h1 {
    position: relative;
    font-size: var(--font-size__extra-big-ass);
    letter-spacing: -3px;
    margin-bottom: 7rem;

    @media (max-width: 899px) {
      font-size: var(--font-size__big-ass);
      margin-bottom: 4rem;
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
          bottom: 20px;
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
      padding: 70px 30px;
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
    margin-right: 15px;
  }

  p {
    clear: both;
    margin: 0;
    font-weight: 500;
  }
`
