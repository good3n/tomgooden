import React, { useState } from 'react'
import SEO from '../components/seo'
import VisibilitySensor from 'react-visibility-sensor'
import ScrollingColorBackground from 'react-scrolling-color-background'
import { Work } from '../assets/styles/pages/Work.styles'
import { CheckInPortal } from '../components/Projects/CheckInPortal'
import { TherapistDirectory } from '../components/Projects/TherapistDirectory'

export const ListItem = ({ text }) => (
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <defs />
      <path
        stroke="#56CBF9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12H3m14-4l4 4-4-4zm4 4l-4 4 4-4z"
      />
    </svg>
    <span>{text}</span>
  </li>
)

const WorkPage = () => {
  const [visibility, setVisibility] = useState(false)

  function onChange(isVisible) {
    setVisibility(isVisible)
  }

  return (
    <>
      <SEO title="Work" />
      <Work className={visibility ? `even` : ``}>
        <ScrollingColorBackground
          selector=".js-color-stop[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb="rgb(86, 203, 249)"
        />
        <TherapistDirectory
          dataBackgroundColor="rgb(86, 203, 249)"
          className="js-color-stop"
        />
        <VisibilitySensor
          onChange={onChange}
          partialVisibility={true}
          offset={{ bottom: 550 }}
        >
          <CheckInPortal
            dataBackgroundColor="rgb(252, 0, 85)"
            className="js-color-stop"
          />
        </VisibilitySensor>
      </Work>
    </>
  )
}

export default WorkPage
