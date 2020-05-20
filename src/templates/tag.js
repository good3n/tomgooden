import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { PostTags } from '../components/PostTags'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 50px;
  font-size: 16px;
  color: #777;
  font-family: var(--font_heading);

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }

  a {
    @media (min-width: 900px) {
      .gatsby-image-wrapper {
        transition: transform 0.2s ease;
      }
      &:hover {
        .gatsby-image-wrapper {
          transform: scale(1.05);
        }
      }
    }

    &::before {
      display: none;
    }
  }

  h2 {
    font-size: 28px;
    margin: 20px 0 15px;
  }
`

const Wrapper = styled.div`
  min-height: calc(100vh - 255px);
  display: flex;
  align-items: center;

  @media (max-width: 899px) {
    min-height: calc(100vh - 272px);
  }
`

const PostMeta = styled.header`
  div:first-of-type {
    font-weight: 700;
    color: ${props => props.theme.colors.bodyText};
  }

  div:last-of-type {
    margin-bottom: 20px;
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with #${tag}`
  return (
    <>
      <Wrapper>
        <div>
          <h1>{tagHeader}</h1>
          <Grid>
            {edges.map(({ node }) => {
              const {
                path,
                title,
                author,
                date,
                tags,
                featuredImage,
              } = node.frontmatter
              return (
                <div key={path}>
                  <Link to={path}>
                    <Img sizes={featuredImage.childImageSharp.sizes} />
                    <h2>{title}</h2>
                  </Link>
                  <PostMeta>
                    <div>{author}</div>
                    <div>{date}</div>
                  </PostMeta>
                  <PostTags tags={tags} />
                </div>
              )
            })}
          </Grid>
          {/* <Link to="/tags">All tags</Link> */}
        </div>
      </Wrapper>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            tags
            author
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 830, quality: 90) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
