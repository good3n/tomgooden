import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Avatar from "../assets/images/avatar-tom-gooden.png"

const PostWrap = styled.article`
  &:first-of-type {
    h1 {
      font-size: 36px;
    }
  }
`

const Title = styled.h1`
  margin: 20px 0 30px;
`

const BlogMeta = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  column-gap: 15px;
  align-items: center;
  font-size: 16px;
  color: #777;

  img {
    display: block;
    grid-row: 1 / 3;
    margin: 0;
  }

  .author {
    color: #121212;
    font-weight: 600;
  }
`

const PostLink = ({ post }) => (
  <PostWrap>
    <Link to={post.frontmatter.path} style={{ display: `block` }}>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <Title>{post.frontmatter.title}</Title>
      <BlogMeta className={`is-sans meta`}>
        <img src={Avatar} alt="Tom Gooden" style={{
          width: `60px`,
          borderRadius: `60px`
        }} />
        <div className="author">by Tom Gooden</div>
        <span className="date-time">{post.frontmatter.date} <span style={{ margin: `0 5px` }}>&middot;</span> {post.fields.readingTime.text}</span>
      </BlogMeta>
    </Link>
  </PostWrap>
)

export default PostLink
