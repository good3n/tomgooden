import * as React from 'react'
import { Link } from 'gatsby'
import { StyledCta } from './Cta.styles'

const Cta = () => (
  <StyledCta className="container">
    <h2>
      Get a <span>free quote</span> for your next project
    </h2>
    <div className="card">
      <Link to="/contact">Get in touch</Link>
    </div>
  </StyledCta>
)

export default Cta
