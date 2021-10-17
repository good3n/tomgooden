import styled from 'styled-components'

export const Roadmap = styled.div`
  background-color: #403ec6;
  padding: 6rem 0;
  overflow: hidden;
  color: #e5e5f8;

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
    color: #fff;
    margin-top: 0;
  }

  .container {
    position: relative;
    margin-top: 5rem;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: -35px;
      left: 30px;

      @media (max-width: 1175px) {
        top: -140px;
        left: 60px;
      }

      @media (max-width: 899px) {
        top: -120px;
        left: 60px;
      }

      @media (max-width: 600px) {
        top: -100px;
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
      font-size: var(--font-size__h5);
      color: #fff;
    }

    p {
      margin: 5rem 0 0;
      font-size: var(--font-size__small);

      @media (max-width: 1175px) {
        margin-top: 1rem;
      }
    }
  }
`
