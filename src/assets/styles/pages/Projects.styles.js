import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Projects = styled.div`
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
    span {
      display: block;
      margin-bottom: 1rem;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: var(--color__headline);
  }

  li {
    display: block;
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 2.074rem;

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
