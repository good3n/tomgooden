import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"
import Tags from "../components/post/post-tags"

const Title = styled.h1`
  font-size: 50px;
  margin: 20px 0 30px;

  @media (max-width: 899px) {
    font-size: 36px;
  }
`

const PostMeta = styled.div`
  font-size: 16px;
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

  .post-author {
    font-weight: 600;
    color: #121212;
    margin-right: 10px;

    @media (max-width: 899px) {
      display: block;
    }
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

  const ogImagePath = frontmatter.featuredImage.childImageSharp.sizes

  return (
    <Layout slug={data.markdownRemark.fields.slug}>
      <SEO
        title={frontmatter.title}
        image={ogImagePath}
      />
      <div className="blog-post">
        <Img sizes={frontmatter.featuredImage.childImageSharp.sizes} style={{ marginBottom: `20px` }} />
        <Title>{frontmatter.title}</Title>
        <PostMeta className={`is-sans`}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{
            width: `60px`,
            borderRadius: `60px`
          }} />
          <div>
            <span className="post-author">Tom Gooden</span>
            <span className="post-date">{frontmatter.date} <span style={{ margin: `0 5px` }}>&middot;</span></span>
            <span className="read-time">{data.markdownRemark.fields.readingTime.text}</span>
            <Tags tags={frontmatter.tags} />
          </div>
        </PostMeta>
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
