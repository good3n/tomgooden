// import React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import { StyledTags } from './PostTags.styles'

// const AllPostTags = () => {
//   const data = useStaticQuery(graphql`
//     {
//       tagsGroup: allMarkdownRemark {
//         group(field: frontmatter___tags) {
//           fieldValue
//         }
//       }
//     }
//   `)
//   const tags = data.tagsGroup.group
//   return (
//     <StyledTags>
//       {tags.map(({ fieldValue }) => (
//         <Link
//           key={Math.random().toString(36).substring(2, 15)}
//           to={`/tags/${fieldValue}/`}
//           className={`tag-${fieldValue}`}
//         >
//           #{fieldValue}
//         </Link>
//       ))}
//     </StyledTags>
//   )
// }

// export default AllPostTags
