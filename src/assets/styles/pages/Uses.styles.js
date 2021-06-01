import styled from 'styled-components'

export const StyledUses = styled.div`
  header {
    display: grid;
    grid-template-columns: 50% 1fr;
    align-items: center;
    gap: 100px;
    background: var(--color_offWhite);
    padding: 0;

    @media (max-width: 899px) {
      display: block;
    }

    + .container {
      margin-top: 40px;
    }
  }

  ul {
    margin: 0;
  }

  li {
    font-weight: 700;
    display: block;

    span {
      font-weight: normal;
      &::before {
        content: ' - ';
      }
    }
  }

  .gatsby-image-wrapper {
    @media (max-width: 899px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      height: 300px;
    }

    + div {
      padding-right: 100px;

      @media (max-width: 899px) {
        padding: 50px 30px;
      }
    }
  }

  h1 {
    font-size: var(--font-size__extra-big-ass);
    margin: 0;

    @media (max-width: 899px) {
      font-size: var(--font-size__medium-ass);
    }

    + p {
      margin: 0;
    }
  }

  h2 {
    font-size: var(--font-size__h3);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media (max-width: 440px) {
      display: block;
    }

    li {
      font-weight: 600;
    }
  }
`
