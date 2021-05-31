import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Nav, NavToggle } from './Navigation.styles'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Nav>
      <NavToggle
        onClick={() => {
          setIsNavOpen(!isNavOpen)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <defs />
          <path
            fill="#ffffff"
            d="M352 112c0-22.624 9.504-42.976 24.608-57.536C363.616 50.624 350.112 48 336 48H176c-72.352 0-133.824 54.144-142.912 125.984-.096.672.16 1.344.16 2.016h351.2C364.864 161.408 352 138.304 352 112zM32 336v16c0 44.128 35.904 80 80 80h288c44.128 0 80-35.872 80-80v-16H32zM400 224c0-5.472.576-10.816 1.6-16H48c-26.496 0-48 21.504-48 48s21.504 48 48 48h416c2.752 0 5.376-.352 8-.8-40.384-4.064-72-37.76-72-79.2z"
          />
        </svg>
      </NavToggle>
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
            to="/work/"
            activeClassName="is-active"
            onClick={() => {
              setIsNavOpen(false)
            }}
          >
            Work
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
  )
}

export default Navigation
