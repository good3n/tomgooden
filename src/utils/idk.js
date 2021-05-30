import React from 'react'

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
