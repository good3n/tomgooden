import styled from 'styled-components'

export const Hero = styled.div`
  margin: 11rem 0 16rem;
  text-align: center;

  h1 {
    position: relative;
    font-size: 5.55rem;
    letter-spacing: -3px;
    margin-bottom: 7rem;

    span.block {
      display: block;
    }

    span.text {
      position: absolute;
      top: calc(100% - 1.5rem);
      right: 0;
      left: 0;
      z-index: 1;

      > span {
        position: relative;

        &:after {
          content: '';
          height: 10px;
          width: 100%;
          background-color: var(--color_red);
          animation: underline-color 5s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
            infinite;
          position: absolute;
          bottom: 22px;
          right: 0;
          left: 0;
          z-index: -1;
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
    /* flex-direction: column; */

    &:nth-of-type(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      background-color: var(--color_red);
      color: #fff;

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(2) {
      grid-column: 3 / 5;
      grid-row: 1 / 2;
      background-color: var(--color_blue);
      color: #fff;

      h2 {
        color: #fff;
      }
    }

    &:nth-of-type(3) {
      background-color: var(--color_offWhite);
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      color: var(--color_text--heading);

      h2 {
        color: var(--color_text--heading);
      }
    }

    &:nth-of-type(4) {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
      background-color: var(--color_yellow);
      color: var(--color_text--heading);

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
  }
`
