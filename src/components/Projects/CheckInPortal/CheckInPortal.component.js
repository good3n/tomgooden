import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledWork } from './CheckInPortal.styles'
import { MainImage } from '../../../assets/styles/pages/Work.styles'
import { ListItem } from '../../../pages/work'

const CheckInPortal = ({ className, dataBackgroundColor }) => {
  const data = useStaticQuery(graphql`
    fragment workImage on File {
      childImageSharp {
        fluid(maxWidth: 730, quality: 90) {
          ...GatsbyImageSharpFluid
        }
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

  return (
    <StyledWork
      className={className}
      data-background-color={dataBackgroundColor}
    >
      <div className="container red">
        <div className="grid">
          <div>
            <MainImage
              fluid={data.image1.childImageSharp.fluid}
              imgStyle={{ objectFit: `cover` }}
              alt="Tom Gooden GLPG Check-in Portal Design iPad"
            />
          </div>
          <div>
            <h1>
              <span>GLPG</span>Patient check-in portal
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
