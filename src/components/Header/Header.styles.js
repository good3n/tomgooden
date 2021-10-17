import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  z-index: 998;
  padding: 2rem 0 3rem;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1200px;

    > div:first-of-type {
      svg {
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        transform: translate(0, 0);
        opacity: 0.4;

        &:nth-of-type(1) {
          -webkit-animation-name: square;
          animation-name: square;
        }

        &:nth-of-type(2) {
          top: 20px;
          left: 10px;
          animation-name: triangle;
        }

        &:nth-of-type(3) {
          top: 10px;
          left: 40px;
          animation-name: circle;
        }
      }
    }
  }

  @keyframes square {
    0% {
      transform: translate(0, 0);
    }

    20% {
      transform: translate(-10%, 10%);
    }

    40% {
      transform: translate(0%, -10%);
    }

    60% {
      transform: translate(20%, 0%);
    }

    80% {
      transform: translate(10%, -10%);
    }
  }

  @keyframes triangle {
    0% {
      transform: translate(0, 0);
    }

    20% {
      transform: translate(5%, -10%);
    }

    40% {
      transform: translate(10%, 5%);
    }

    60% {
      transform: translate(-10%, -5%);
    }

    80% {
      transform: translate(0%, 10%);
    }
  }

  @keyframes circle {
    0% {
      transform: translate(0, 0);
    }

    20% {
      transform: translate(0%, 20%);
    }

    40% {
      transform: translate(10%, 0%);
    }

    60% {
      transform: translate(0%, 20%);
    }

    80% {
      transform: translate(5%, 0%);
    }
  }
`
