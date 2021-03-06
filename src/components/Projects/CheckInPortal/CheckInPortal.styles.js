import styled from 'styled-components'

export const StyledWork = styled.div`
  position: relative;
  z-index: 10;
  padding-bottom: 10.699rem;

  @media (max-width: 899px) {
    .container {
      padding-right: 50px;
      padding-left: 50px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 1.44rem;

    .container {
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 550px 1fr;
    gap: 50px;
    margin-top: 2.488rem;
    position: relative;

    @media (max-width: 1090px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
    }

    > div:first-of-type {
      position: relative;
      z-index: 1;
      margin-left: -50px;

      @media (max-width: 1090px) {
        margin-left: -30px;
      }

      @media (max-width: 899px) {
        margin-left: 0;
      }
    }
  }

  h1 span {
    color: var(--color_red);
  }

  svg path {
    stroke: var(--color_red);
  }
`
