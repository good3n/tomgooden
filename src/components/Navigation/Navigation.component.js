import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Nav, NavToggle } from './Navigation.styles'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <NavToggle
        className={isNavOpen}
        onClick={() => {
          setIsNavOpen(!isNavOpen)
        }}
      >
        <div></div>
      </NavToggle>

      <Nav className={isNavOpen}>
        <ul className={isNavOpen ? `true` : ``}>
          <li>
            <Link
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
              to="/projects/"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClassName="is-active"
              onClick={() => {
                setIsNavOpen(false)
              }}
              to="/contact/"
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
