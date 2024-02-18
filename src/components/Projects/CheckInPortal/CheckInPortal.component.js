import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledWork } from './CheckInPortal.styles'
import { ListItem } from '../../../utils/idk'

const imageStyles = {
  maxWidth: `730px`,
  objectFit: `cover`,
  objectPosition: `50% 50%`,
  margin: `0 auto`,
  position: `relative`,
  left: `-40px`,

  '@media (max-width: 600px)': {
    left: `-6%`,
  },
}

const CheckInPortal = () => {
  return (
    <StyledWork>
      <div className="container red">
        <div className="grid">
          <div>
            <StaticImage
              alt="Tom Gooden GLPG Check-in Portal Design iPad"
              src="../../../../static/images/checkin-portal-glpg-mobile-mockup.png"
              style={imageStyles}
            />
          </div>
          <div>
            <h1>
              <span className="subheader">GLPG</span>Mobile Patient check-in
            </h1>
            <p>
              A progressive web app designed and developed to allow patients to
              self check-in for their appointments.
            </p>
            <ul>
              <ListItem text="Svelte" />
              <ListItem text="MongoDB" />
              <ListItem text="NodeJS" />
              <ListItem text="Salesforce" />
            </ul>
          </div>
        </div>
      </div>
    </StyledWork>
  )
}

export default CheckInPortal
