import styled from 'styled-components'

export const Hero = styled.div`
  padding: 7.43rem 11vw 5.16rem;
  text-align: center;

  @media (max-width: 899px) {
    margin: 0;
    padding: 6.192rem 30px;
  }

  h1 {
    position: relative;
    font-size: var(--font-size__extra-big-ass);
    letter-spacing: -3px;
    margin-bottom: 6.192rem;

    @media (max-width: 899px) {
      font-size: var(--font-size__big-ass);
      margin-bottom: 3.583rem;
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

      @media (max-width: 899px) {
        top: calc(100% - 1rem);
      }

      > span {
        position: relative;
        display: inline-block;
        height: 116px;

        @media (max-width: 899px) {
          height: 83px;
        }

        &:after {
          content: '';
          height: 10px;
          width: 100%;
          background-color: var(--color_red);
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
      right: -20px;
      top: 0;
      font-weight: normal;
      animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
        infinite;

      @media (max-width: 899px) {
        right: -10px;
      }
    }
  }

  p {
    font-size: var(--font-size__h3);
    color: #495057;

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
