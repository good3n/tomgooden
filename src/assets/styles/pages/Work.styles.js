import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Work = styled.div`
  overflow: hidden;

  > section:nth-of-type(1) {
    &:after {
      content: '';
      position: fixed;
      background-color: var(--color_background);
      top: 15px;
      right: 15px;
      bottom: 15px;
      left: 15px;

      @media (max-width: 899px) {
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
      }
    }
  }

  h1 {
    font-size: var(--font-size__big-ass);
    line-height: 1;

    @media (max-width: 1175px) {
      font-size: var(--font-size__medium-ass);
    }

    @media (max-width: 899px) {
      font-size: var(--font-size__h1);
    }

    span {
      display: block;
      color: var(--color_blue);
      font-size: var(--font-size__h5);
      letter-spacing: 3px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

  p {
    font-weight: 500;
    color: var(--color_heading-text);
  }

  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size__h4);
    color: var(--color_heading-text);
  }

  li {
    display: block;
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 40px;

    svg {
      height: 24px;
      width: 24px;
      margin-right: 20px;
    }
  }
`

// former gatsby-image
export const MainImage = styled(GatsbyImage)`
  margin: 0 auto;
  position: relative;
  left: -40px;

  @media (max-width: 600px) {
    left: -30px;
    left: -6%;
  }
`

// former gatsby-image
export const SubImage = styled.div`
  max-width: 760px;
  position: relative;
  right: -50px;

  @media (max-width: 899px) {
    right: auto;
    left: -70px;
    margin-top: -200px;
  }

  @media (max-width: 600px) {
    left: 0;
    margin-top: -100px;
  }
`
