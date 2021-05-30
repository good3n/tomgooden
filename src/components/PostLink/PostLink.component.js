import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Avatar from '../../assets/images/about/tom-gooden.png'
import { PostWrap, Title, BlogMeta } from './PostLink.styles'

const PostLink = ({ post }) => {
  const image = getImage(post.frontmatter.featuredImage)
  return (
    <PostWrap>
      <Link to={post.frontmatter.path} style={{ display: `block` }}>
        <GatsbyImage image={image} alt="" />
        {/* <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} /> */}
        <Title>{post.frontmatter.title}</Title>
        <BlogMeta className={`meta`}>
          <img
            src={Avatar}
            alt="Tom Gooden"
            css={`
              width: 60px;
              border-radius: 60px;
            `}
          />
          <div className="author">by Tom Gooden</div>
          <span className="date-time">
            {post.frontmatter.date}{' '}
            <span style={{ margin: `0 5px` }}>&middot;</span>{' '}
            {/* {post.fields.readingTime.text} */}
          </span>
        </BlogMeta>
      </Link>
    </PostWrap>
  )
}

export default PostLink
