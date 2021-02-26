import React from 'react'
import { func, string } from 'prop-types'
import { Toggle } from './ThemeToggle.styles'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Toggle onClick={toggleTheme} className={theme}>
      <svg
        className="light"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 448"
      >
        <circle cx="224" cy="224" r="224" />
      </svg>
      <svg
        className="dark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 448"
      >
        <path d="M184 0C133.6 0 85.952 16.448 46.144 47.552 42.272 50.592 40 55.264 40 60.192c0 4.928 2.304 9.568 6.176 12.608C93.088 109.216 120 164.32 120 224c0 23.104-4.128 45.472-11.776 66.4 3.648-1.472 7.584-2.4 11.776-2.4 17.664 0 32 14.336 32 32s-14.336 32-32 32c-14.88 0-26.816-10.368-30.4-24.096-11.52 17.856-26.08 33.888-43.392 47.328C42.304 378.208 40 382.88 40 387.808c0 4.928 2.24 9.6 6.144 12.64C85.92 431.552 133.6 448 184 448c123.488 0 224-100.512 224-224C408 100.48 307.488 0 184 0zm80 192c-26.496 0-48-21.504-48-48s21.504-48 48-48 48 21.504 48 48-21.504 48-48 48z" />
      </svg>
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  theme: string,
  toggleTheme: func.isRequired,
}

export default ThemeToggle
