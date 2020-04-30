import React from 'react'
import { StyledFooter } from './Footer.styles'

const Footer = () => (
  <StyledFooter>
    <div>
      &copy; {new Date().getFullYear()}
      {` `}
      <a href="https://tomgooden.net">Tom Gooden</a>
    </div>
    <div>
      <span>
        Built with{' '}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
          <path d="M401.79 74.48c-63.5-82.44-188.45-33.8-188.45 49.92 0-83.72-124.96-132.36-188.46-49.92-65.63 85.22-.94 234.5 188.46 320.26C402.74 309 467.42 159.7 401.79 74.48z"></path>
        </svg>{' '}
        using{' '}
        <a href="https://reactjs.org/" rel="nofollow noopener noreferrer">
          React
        </a>{' '}
        and{' '}
        <a href="https://www.gatsbyjs.org/" rel="nofollow noopener noreferrer">
          Gatsby.js
        </a>
        .<br />
      </span>
      <span>
        Hosted on{' '}
        <a href="https://www.netlify.com/" rel="nofollow noopener noreferrer">
          Netlify
        </a>
        .
      </span>
    </div>
  </StyledFooter>
)

export default Footer
