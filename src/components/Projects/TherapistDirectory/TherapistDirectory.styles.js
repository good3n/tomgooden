import styled from 'styled-components'
import Img from 'gatsby-image'

export const StyledWork = styled.div`
  position: relative;
  padding: 100px 0 200px;
  margin-top: 100px;

  @media (max-width: 899px) {
    padding: 0 0 50px;

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
    margin-top: 50px;
    position: relative;

    @media (max-width: 899px) {
      display: flex;
      flex-direction: column;
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

export const MainImage = styled(Img)`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  left: -40px;

  @media (max-width: 600px) {
    left: -30px;
    left: -6%;
  }
`
