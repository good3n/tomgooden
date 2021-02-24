import styled from 'styled-components'
import Img from 'gatsby-image'

export const Work = styled.div`
  overflow: hidden;

  > section:first-of-type {
    position: fixed !important;
    height: 70vw;
    width: 35vw;
    top: 50px !important;
    right: 0 !important;
    left: 0 !important;
    margin-left: 65vw !important;
    margin-right: 0 !important;
    clip-path: polygon(100% 0, 100% 100%, 0 49%);
    transform: rotate(0deg);
    transition: all 1s ease;
  }

  &.even > section:first-of-type {
    transform: rotate(180deg);
    margin-left: 0 !important;
    margin-right: 65vw !important;
  }

  h1 {
    font-size: var(--font-size__big-ass);

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
    }
  }

  p {
    font-weight: 500;
    color: ${props => props.theme.colors.headingText};
  }

  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size__h4);
    color: ${props => props.theme.colors.headingText};
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

export const MainImage = styled(Img)`
  max-width: 730px;
  margin: 0 auto;
  position: relative;
  left: -40px;

  @media (max-width: 600px) {
    left: -30px;
    left: -6%;
  }
`

export const SubImage = styled(Img)`
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
