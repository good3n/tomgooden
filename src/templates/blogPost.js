// import React from 'react'
// import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import Layout from '../components/Layout'
// import Seo from '../components/Seo'
// import { PostTags } from '../components/PostTags'
// import { Title, PostMeta, Content } from '../page-styles/blogPost.styles'

// export default function Template({ data }) {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   // const metaImagePath = frontmatter.featuredImage.childImageSharp.sizes.src
//   const featuredImage = getImage(frontmatter.featuredImage)
//   const avatar = getImage(data.placeholderImage)

//   return (
//     <Layout>
//       {/* <div className="container" slug={data.markdownRemark.fields.slug}> */}
//       <div className="container container--skinny">
//         <Seo
//           title={frontmatter.title}
//           // image={metaImagePath}
//           description={frontmatter.description}
//         />
//         <div className="blog-post">
//           {/* maxwidth 830px */}
//           {/* margin-bottom 20px */}
//           <GatsbyImage image={featuredImage} alt="" />

//           <Title>{frontmatter.title}</Title>
//           <PostMeta>
//             {/* maxwidth 60px - width 60px - borderradius 60px */}
//             <GatsbyImage image={avatar} alt="" />
//             <div>
//               <span className="post-author">Tom Gooden</span>
//               <span className="post-date">
//                 {frontmatter.date}{' '}
//                 <span style={{ margin: `0 5px` }}>&middot;</span>
//               </span>
//               <span className="read-time">
//                 {/* {data.markdownRemark.fields.readingTime.text} */}
//               </span>
//               <PostTags tags={frontmatter.tags} />
//             </div>
//           </PostMeta>
//           <Content
//             className={`blog-post-content`}
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query ($path: String!) {
//     placeholderImage: file(relativePath: { eq: "avatar-tom-gooden.png" }) {
//       childImageSharp {
//         gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//       }
//     }
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         tags
//         author
//         description
//         featuredImage {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//           }
//         }
//       }
//     }
//   }
// `
