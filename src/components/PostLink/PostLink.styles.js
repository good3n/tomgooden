import styled from 'styled-components'

export const Title = styled.h1`
  margin: 1rem 0 1.728rem;
`

export const BlogMeta = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  column-gap: 15px;
  align-items: center;
  font-size: var(--font-size__small);
  color: var(--color_body-text--light);
  font-family: var(--font_heading);

  img {
    display: block;
    grid-row: 1 / 3;
    margin: 0;
  }

  .author {
    color: var(--color_body-text);
    font-weight: 600;
  }
`
