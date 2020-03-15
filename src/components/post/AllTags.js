import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const AllTags = () => {
  const data = useStaticQuery(graphql`
    {
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  return (
    
  )
}

export default AllTags
