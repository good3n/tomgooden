import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import { PostLink } from '../components/PostLink'
// import AllPostTags from '../components/PostTags/AllPostTags.component'
// import { Grid, Block } from '../page-styles/blog.styles'

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             path
//             title
//             tags
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const BlogListPage = () =>
  // {
  //   data: {
  //     allMarkdownRemark: { edges },
  //   },
  // }
  {
    //   const Posts = edges
    //     .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    //     .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)
    return (
      <Layout>
        <div className="container">
          <p>This page is under construction</p>
        </div>
      </Layout>
    )
  }
//     <Layout>
//       <div className="container">
//         <h1>Blog</h1>
//         <Grid>
//           <Block>
//             <h3>Tags</h3>
//             <AllPostTags />
//           </Block>
//           {Posts}
//         </Grid>
//       </div>
//     </Layout>
//   )
// }

export default BlogListPage
