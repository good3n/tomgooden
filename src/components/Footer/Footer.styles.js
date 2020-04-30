import styled from 'styled-components'

export const StyledFooter = styled.footer`
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.bodyTextExtraLight};
  font-family: var(--font_heading);

  /* layout */
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.bodyTextExtraLight};
    transition: 0.2s color ease;

    &:hover {
      color: ${props => props.theme.colors.bodyTextLight};
    }
  }

  > div:nth-of-type(2) {
    justify-self: end;

    @media (max-width: 899px) {
      justify-self: start;
      margin-top: 10px;
    }

    span {
      margin-left: 10px;

      @media (max-width: 899px) {
        margin: 0 5px;
      }
    }
  }

  br {
    display: none;

    @media (max-width: 899px) {
      display: block;
    }
  }

  svg {
    width: 18px;
    margin: 0 3px;
    display: inline-block;
    position: relative;
    top: 4px;

    path {
      fill: ${props => props.theme.colors.bodyTextLight};
    }
  }
`
