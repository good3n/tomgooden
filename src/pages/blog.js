import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  position: relative;
  margin-bottom: 124px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;
  }

  > article:nth-of-type(1) {
    grid-column: 1 / 3;

    @media (max-width: 899px) {
      grid-column: auto;
    }
  }

  a {
    text-decoration: none;

    &::before {
      display: none;
    }
  }

  article:not(:first-of-type) {
    h1 {
      margin-bottom: 10px;
    }

    .meta {
      grid-template-columns: 1fr;
      color: #888;

      img,
      .author {
        display: none;
      }
    }
  }
`

const Block = styled.div`
  background: #f7f7f7;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  padding: 50px 30px;

  @media (max-width: 899px) {
    display: none;
  }
`

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <h1>Blog</h1>
      <Grid>
        <Block>
          <p class="is-sans" style={{ fontSize: `16px`, fontWeight: `500`, color: `#777` }}>Placeholder block for future categories/tags. Stay tuned!</p>
        </Block>
        {Posts}
      </Grid>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 830) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`