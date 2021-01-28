import React from 'react'
import { Link } from 'gatsby'
import { Nav } from './Navigation.styles'

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/about/" activeClassName="is-active">
            About
          </Link>
        </li>
        <li>
          <Link to="/work/" activeClassName="is-active">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="is-active">
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
