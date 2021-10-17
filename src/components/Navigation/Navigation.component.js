import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Nav, NavToggle } from './Navigation.styles'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <NavToggle
        onClick={() => {
          setIsNavOpen(!isNavOpen)
        }}
        className={isNavOpen}
      >
        <div></div>
      </NavToggle>

      <Nav className={isNavOpen}>
        <ul className={isNavOpen ? `true` : ``}>
          <li>
            <Link
              to="/about/"
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects/"
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  )
}

export default Navigation
