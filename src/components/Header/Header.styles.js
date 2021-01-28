import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 50px 150px;

  svg {
    width: 175px;
    position: relative;
    top: 5px;

    path {
      fill: ${props => props.theme.colors.headingText};
    }
  }
`
