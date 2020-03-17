import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 899px) {
    padding: 30px 20px;
    gap: 20px;
  }

  svg path {
    fill: ${props => props.theme.colors.headingText};
  }

  > a:first-of-type {
    width: 50px;
  }
`