import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = () => (
  <footer>
    <div>
      &copy; {new Date().getFullYear()}
      {` `}
      <a href="https://tomgooden.net">Tom Gooden</a>
    </div>
    <div>
      <OutboundLink href="mailto:good3n@gmail.com">email</OutboundLink>
    </div>
  </footer>
)

export default Footer
