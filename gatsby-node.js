// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const { createFilePath } = require(`gatsby-source-filesystem`)
// const path = require('path')
// const _ = require('lodash')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve('src/templates/blogPost.js')
//   const tagTemplate = path.resolve('src/templates/tag.js')

//   const result = await graphql(`
//     {
//       postsRemark: allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 2000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               path
//             }
//           }
//         }
//       }
//       tagsGroup: allMarkdownRemark(limit: 2000) {
//         group(field: frontmatter___tags) {
//           fieldValue
//         }
//       }
//     }
//   `)

//   // handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const posts = result.data.postsRemark.edges

//   // Create post detail pages
//   posts.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: blogPostTemplate,
//     })
//   })

//   // Extract tag data from query
//   const tags = result.data.tagsGroup.group

//   // Make tag pages
//   tags.forEach((tag) => {
//     createPage({
//       path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
//       component: tagTemplate,
//       context: {
//         tag: tag.fieldValue,
//       },
//     })
//   })
// }
