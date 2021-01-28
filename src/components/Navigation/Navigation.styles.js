import styled from 'styled-components'

export const Nav = styled.nav`
  margin-left: auto;
  font-weight: 600;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    display: block;
    margin: 0 30px 0 0;
  }

  a {
    color: ${props => props.theme.colors.heading};
  }
`
