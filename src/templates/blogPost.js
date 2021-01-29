import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import { PostTags } from '../components/PostTags'
import { Title, PostMeta, Content } from '../page-styles/blogPost.styles'

export default function Template({ data }) {
  // this prop 'data' will be injected by the GraphQL query below.

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const metaImagePath = frontmatter.featuredImage.childImageSharp.sizes.src

  return (
    <div className="container" slug={data.markdownRemark.fields.slug}>
      <SEO
        title={frontmatter.title}
        image={metaImagePath}
        description={frontmatter.description}
      />
      <div className="blog-post">
        <Img
          sizes={frontmatter.featuredImage.childImageSharp.sizes}
          style={{ marginBottom: `20px` }}
        />
        <Title>{frontmatter.title}</Title>
        <PostMeta>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{
              width: `60px`,
              borderRadius: `60px`,
            }}
          />
          <div>
            <span className="post-author">Tom Gooden</span>
            <span className="post-date">
              {frontmatter.date}{' '}
              <span style={{ margin: `0 5px` }}>&middot;</span>
            </span>
            <span className="read-time">
              {data.markdownRemark.fields.readingTime.text}
            </span>
            <PostTags tags={frontmatter.tags} />
          </div>
        </PostMeta>
        <Content
          className={`blog-post-content`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    placeholderImage: file(relativePath: { eq: "avatar-tom-gooden.png" }) {
      childImageSharp {
        fluid(maxWidth: 60, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        author
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 830, quality: 90) {
              ...GatsbyImageSharpSizes
              src
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
`
