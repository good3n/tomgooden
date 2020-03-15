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
        Coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          rel="nofollow noopener noreferrer"
        >
          VS Code
        </a>
        .
      </span>
      <span>
        Built with{' '}
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
