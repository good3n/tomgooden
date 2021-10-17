import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 3rem auto;
  font-size: var(--font-size__base--sm);
  color: #b6bdc6;

  .container {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    height: 24px;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 20px;

    path {
      fill: #b6bdc6;
    }
  }
`
