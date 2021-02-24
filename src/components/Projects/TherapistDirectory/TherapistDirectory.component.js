import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledWork, MainImage } from './TherapistDirectory.styles'
import { ListItem } from '../../../pages/work'

const TherapistDirectory = ({
  className,
  dataBackgroundColor,
  dataBackgroundColorTwo,
}) => {
  const data = useStaticQuery(graphql`
    fragment workTwoImage on File {
      childImageSharp {
        fluid(maxWidth: 900, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      image1: file(
        relativePath: {
          eq: "mockups/therapist-directory-glpg-laptop-mockup.png"
        }
      ) {
        ...workTwoImage
      }
    }
  `)

  return (
    <StyledWork
      className={className}
      data-background-color={dataBackgroundColor}
    >
      <div className="container">
        <div className="grid">
          <div>
            <h1>
              <span>GLPG</span>Therapist Directory
            </h1>
            <p>
              Searchable directory of therapists that allows users to filter or
              search based on location, issues, insurance, and more.
            </p>
            <ul>
              <ListItem text="React" />
              <ListItem text="GatsbyJS" />
              <ListItem text="AWS Amplify" />
              <ListItem text="WPGraphQL" />
              <ListItem text="Algolia" />
            </ul>
          </div>
          <div>
            <MainImage
              fluid={data.image1.childImageSharp.fluid}
              imgStyle={{ objectFit: `cover` }}
              alt="Tom Gooden GLPG Therapist Directory Design Laptop"
            />
          </div>
        </div>
      </div>
    </StyledWork>
  )
}

export default TherapistDirectory
