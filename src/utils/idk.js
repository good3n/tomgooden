import React from 'react'
import PropTypes from 'prop-types'

export const ListItem = ({ text }) => (
  <li>
    <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs />
      <path
        d="M21 12H3m14-4l4 4-4-4zm4 4l-4 4 4-4z"
        stroke="#56CBF9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
    <span>{text}</span>
  </li>
)

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
}
