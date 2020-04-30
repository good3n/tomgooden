import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Nav, NavToggle } from './Navigation.styles'

const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false)
  const handleToggle = () => setIsToggled(!isToggled)
  const closeNav = () => setIsToggled(false)
  return (
    <Nav className={`${isToggled ? 'active' : ''}`}>
      <NavToggle
        id="toggle"
        className={`${isToggled ? 'active' : ''}`}
        onClick={handleToggle}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className="toggle-box">
          <span className="toggle-inner"></span>
        </span>
      </NavToggle>
      <ul>
        <li>
          <Link to="/about/" activeClassName="is-active" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link to="/work/" activeClassName="is-active" onClick={closeNav}>
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeClassName="is-active"
            partiallyActive={true}
            onClick={closeNav}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="is-active" onClick={closeNav}>
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
