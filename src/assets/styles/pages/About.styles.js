import styled from 'styled-components'

export const About = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 899px) {
    padding-top: 3rem;
  }

  header {
    display: grid;
    grid-template-columns: 425px 1fr;
    gap: 100px;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 0;
    }

    img {
      border-radius: 40px 0 40px 0;
    }
  }

  h1 {
    margin-top: 0;

    @media (max-width: 899px) {
      font-size: var(--font-size__h3);
    }
  }

  h2 {
    font-size: var(--font-size__h4);
  }

  .blocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 4rem 0;

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      font-size: var(--font-size__base--sm);
      gap: 30px;

      @media (max-width: 899px) {
        flex-direction: column;
        gap: 1rem;

        .button {
          width: 100%;
          box-sizing: border-box;
          text-align: center;
        }
      }

      &:nth-of-type(1) {
        background: rgba(245, 45, 134, 0.1);
        color: rgb(245, 45, 134);

        span {
          font-family: var(--font-family__code);
          font-size: var(--font-size__h4);
        }
      }

      &:nth-of-type(2) {
        background: rgba(113, 28, 180, 0.1);
        color: rgb(113, 28, 180);

        a {
          background: rgb(113, 28, 180);
          font-family: var(--font-family__code);
          color: #fff;
        }
      }
    }

    p {
      margin: 0;
    }
  }
`
