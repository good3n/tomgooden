import styled from "styled-components"

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 899px) {
    padding: 30px 20px;
  }
`
