import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { PostLink } from '../components/PostLink'
import AllPostTags from '../components/PostTags/AllPostTags.component'
import { Grid, Block } from '../page-styles/blog.styles'

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
                sizes(maxWidth: 830, quality: 90) {
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

const BlogListPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <>
      <h1>Blog</h1>
      <Grid>
        <Block>
          <h3>Tags</h3>
          <AllPostTags />
        </Block>
        {Posts}
      </Grid>
    </>
  )
}

export default BlogListPage
