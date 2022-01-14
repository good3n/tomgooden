// import React from 'react'
// import { Link } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import Avatar from '../../assets/images/about/tom-gooden.png'
// import { Title, BlogMeta } from './PostLink.styles'

// const PostLink = ({ post }) => {
//   const image = getImage(post.frontmatter.featuredImage)
//   return (
//     <article>
//       <Link to={post.frontmatter.path} style={{ display: `block` }}>
//         <GatsbyImage image={image} alt="" />
//         <Title>{post.frontmatter.title}</Title>
//         <BlogMeta className={`meta`}>
//           <img
//             src={Avatar}
//             alt="Tom Gooden"
//             css={`
//               width: 60px;
//               border-radius: 60px;
//             `}
//           />
//           <div className="author">by Tom Gooden</div>
//           <span className="date-time">
//             {post.frontmatter.date}{' '}
//             <span style={{ margin: `0 5px` }}>&middot;</span>{' '}
//           </span>
//         </BlogMeta>
//       </Link>
//     </article>
//   )
// }

// export default PostLink
