import styled from 'styled-components'

export const PostWrap = styled.article`
  &:first-of-type {
    h1 {
      font-size: 36px;
    }
  }
`

export const Title = styled.h1`
  margin: 20px 0 30px;
`

export const BlogMeta = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  column-gap: 15px;
  align-items: center;
  font-size: 16px;
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
