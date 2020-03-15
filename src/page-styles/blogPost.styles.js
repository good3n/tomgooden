import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 50px;
  margin: 20px 0 30px;

  @media (max-width: 899px) {
    font-size: 36px;
  }
`

export const PostMeta = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
  border-top: 1px solid #eee;
  padding-top: 30px;
  color: ${props => props.theme.colors.bodyTextExtraLight};
  font-family: var(--font_heading);

  /* layout */
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  column-gap: 15px;

  .gatsby-image-wrapper {
    grid-row: 1 / 3;
  }

  .post-author {
    font-weight: 600;
    color: ${props => props.theme.colors.bodyText};
    margin-right: 10px;

    @media (max-width: 899px) {
      display: block;
    }
  }
`

export const Content = styled.div`
  margin-top: 50px;

  a {
    word-break: break-word;
  }
`
