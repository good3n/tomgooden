import styled from 'styled-components'

export const StyledUses = styled.div`
  margin-bottom: 5.5rem;

  header {
    display: grid;
    grid-template-columns: 1fr 600px;
    align-items: center;
    gap: 100px;

    @media (max-width: 899px) {
      display: block;
    }

    + .container {
      margin-top: 2rem;
    }
  }

  h1 {
    margin-bottom: 1rem;

    @media (max-width: 899px) {
      font-size: var(--font-size__h2);
    }

    + p {
      margin: 0;

      @media (max-width: 899px) {
        margin-bottom: 2rem;
      }
    }
  }

  h2 {
    font-size: var(--font-size__h5);
    margin-bottom: 2rem;
  }

  .gatsby-image-wrapper {
    border-radius: 40px 0 40px 0;

    @media (max-width: 899px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      height: 300px !important;
    }

    + div {
      padding-right: 100px;

      @media (max-width: 899px) {
        padding: 50px 30px;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;

    @media (max-width: 440px) {
      display: block;
    }

    > div:first-of-type {
      grid-column: 1 / 3;

      li {
        font-weight: 700;
        display: block;

        span {
          display: inline-block;
          font-size: var(--font-size__base);

          &::before {
            content: '-';
            margin: 0 7px;
          }

          @media (max-width: 899px) {
            display: block;
            font-size: var(--font-size__small);

            &::before {
              display: none;
            }
          }
        }
      }
    }
  }

  ul {
    margin: 0;
    padding-left: 10px;
  }

  li {
    font-weight: 600;
    display: block;
    margin-bottom: 1rem;

    span {
      font-weight: normal;
      display: block;
      font-size: var(--font-size__small);
    }

    a {
      position: relative;

      &::after {
        content: '';
        height: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: var(--color_blue);
        opacity: 0.3;
        transition: height 0.2s ease;
        z-index: -1;
      }

      &:hover::after {
        height: 7px;
      }
    }
  }
`
