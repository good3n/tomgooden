import styled from 'styled-components'

export const StyledWork = styled.div`
  position: relative;
  padding: 5.16rem 0 10.699rem;

  @media (max-width: 899px) {
    padding: 0 0 2.488rem;

    .container {
      padding-right: 50px;
      padding-left: 50px;
    }
  }

  @media (max-width: 899px) {
    padding: 0;

    .container {
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 50px;
    align-items: center;
    margin-top: 2.488rem;
    position: relative;
    z-index: 10;

    @media (max-width: 899px) {
      display: flex;
      flex-direction: column;
      margin-top: 0;
    }

    > div:last-of-type {
      margin-right: -300px;

      @media (max-width: 1350px) {
        margin-right: -200px;
      }

      @media (max-width: 899px) {
        width: 600px;
        margin: 0 auto;
        order: -1;
      }

      @media (max-width: 620px) {
        position: relative;
        left: calc((100vw - 585px) / 2);
      }
    }
  }
`

// former gatsby-image
export const MainImage = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  left: -40px;

  @media (max-width: 600px) {
    left: -30px;
    left: -6%;
  }
`
