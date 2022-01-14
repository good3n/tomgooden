import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MainImage } from '../../../assets/styles/pages/Projects.styles'
import { StyledWork } from './CheckInPortal.styles'
import { ListItem } from '../../../utils/idk'

const CheckInPortal = () => {
  const data = useStaticQuery(graphql`
    fragment workImage on File {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    query {
      image1: file(
        relativePath: { eq: "mockups/checkin-portal-glpg-ipad-mockup.png" }
      ) {
        ...workImage
      }
    }
  `)

  const image = getImage(data.image1)

  return (
    <StyledWork>
      <div className="container red">
        <div className="grid">
          <div>
            <MainImage
              alt="Tom Gooden GLPG Check-in Portal Design iPad"
              image={image}
              objectFit="cover"
              objectPosition="50% 50%"
              style={{ maxWidth: `730px` }}
            />
          </div>
          <div>
            <h1>
              <span className="subheader">GLPG</span>Patient check-in portal
            </h1>
            <p>
              A portal designed and developed allowing patients to self check-in
              via an in-office kiosk, or mobile check-in in advance.
            </p>
            <ul>
              <ListItem text="React" />
              <ListItem text="GatsbyJS" />
              <ListItem text="AWS Amplify" />
              <ListItem text="Podio API" />
            </ul>
          </div>
        </div>
      </div>
    </StyledWork>
  )
}

export default CheckInPortal
