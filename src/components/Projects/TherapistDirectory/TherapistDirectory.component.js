import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MainImage } from '../../../assets/styles/pages/Work.styles'
import { StyledWork } from './TherapistDirectory.styles'
import { ListItem } from '../../../utils/idk'

const TherapistDirectory = () => {
  const data = useStaticQuery(graphql`
    fragment workTwoImage on File {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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

  const image = getImage(data.image1)

  return (
    <StyledWork>
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
              image={image}
              alt="Tom Gooden GLPG Therapist Directory Design Laptop"
              objectFit="cover"
              objectPosition="50% 50%"
              style={{ maxWidth: `1100px` }}
            />
          </div>
        </div>
      </div>
    </StyledWork>
  )
}

export default TherapistDirectory
