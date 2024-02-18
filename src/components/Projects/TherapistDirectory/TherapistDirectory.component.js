import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledWork } from './TherapistDirectory.styles'
import { ListItem } from '../../../utils/idk'

const imageStyles = {
  maxWidth: `1100px`,
  objectFit: `cover`,
  objectPosition: `50% 50%`,
  margin: `0 auto`,
  position: `relative`,
  left: `-40px`,

  '@media (max-width: 600px)': {
    left: `-6%`,
  },
}

const TherapistDirectory = () => {
  return (
    <StyledWork>
      <div className="container">
        <div className="grid">
          <div>
            <h1>
              <span className="subheader">GLPG</span>FindMyTherapist.com
            </h1>
            <p>
              Searchable directory of therapists that allows users to filter or
              search based on location, issues, insurance, and more.
            </p>
            <ul>
              <ListItem text="React" />
              <ListItem text="GatsbyJS" />
              <ListItem text="Tailwind" />
              <ListItem text="Salesforce" />
              <ListItem text="Algolia" />
            </ul>
          </div>
          <div>
            <StaticImage
              alt="Tom Gooden Find My Therapist Design Laptop"
              src="../../../../static/images/fmt-mockup.png"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </StyledWork>
  )
}

export default TherapistDirectory
