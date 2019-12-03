import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

const Title = styled.h1`
  font-size: 50px;
  margin: 20px 0 30px;

  @media (max-width: 899px) {
    font-size: 36px;
  }
`

const BlogMeta = styled.div`
  font-size: 18px;
  margin-bottom: 40px;
  border-top: 1px solid #eee;
  padding-top: 30px;
  color: #777;

  /* layout */
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  column-gap: 15px;

  .gatsby-image-wrapper {
    grid-row: 1 / 3;
  }

  .author {
    font-weight: 600;
    color: #121212;
  }
`

const Content = styled.div`
  margin-top: 50px;

  a {
    word-break: break-word;
  }
`

export default function Template({ data }) { // this prop 'data' will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post">
        <Img sizes={frontmatter.featuredImage.childImageSharp.sizes} style={{ marginBottom: `20px` }} />
        <Title>{frontmatter.title}</Title>
        <BlogMeta className={`is-sans`}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{
            width: `60px`,
            borderRadius: `60px`
          }} />
          <div className="author">Tom Gooden</div>
          <div>
            <span className="post-date">{frontmatter.date} <span style={{ margin: `0 5px` }}>&middot;</span></span>
            <span className="read-time">{data.markdownRemark.fields.readingTime.text}</span>
          </div>
        </BlogMeta>
        <Content
          className={`blog-post-content`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    placeholderImage: file(relativePath: {eq: "avatar-tom-gooden.png" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
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
`