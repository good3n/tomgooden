import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2.488rem 150px;
  position: relative;
  z-index: 998;

  @media (max-width: 1199px) {
    padding: 2.488rem 90px;
  }

  @media (max-width: 899px) {
    padding: 2.488rem 30px;
  }

  @media (max-width: 600px) {
    padding: 1.728rem 30px;
  }

  > div:first-of-type {
    svg {
      width: 175px;
      position: relative;
      top: 5px;

      path {
        fill: var(--color_heading-text);
      }
    }
  }
`
