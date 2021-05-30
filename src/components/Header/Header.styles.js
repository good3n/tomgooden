import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 50px 150px;
  position: relative;
  z-index: 998;

  @media (max-width: 1199px) {
    padding: 50px 90px;
  }

  @media (max-width: 899px) {
    padding: 50px 30px;
  }

  @media (max-width: 600px) {
    padding: 30px;
  }

  > div:first-of-type {
    svg {
      width: 175px;
      position: relative;
      top: 5px;

      @media (max-width: 600px) {
        width: 100px;
      }

      path {
        fill: var(--color_heading-text);
      }
    }
  }
`
