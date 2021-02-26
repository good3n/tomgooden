import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 50px auto;
  text-align: center;
  font-size: var(--font-size__small);
  color: var(--color_body-text--light);
  position: relative;

  a {
    display: inline-block;
    color: var(--color_body-text--light);
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: var(--color_body-text--light);
    }
  }

  > div:first-of-type {
    display: grid;
    grid-template-columns: 24px 24px 24px;
    gap: 20px;
    justify-content: center;
    margin-bottom: 15px;

    a,
    img {
      display: block;
      margin: 0;
    }
  }
`
