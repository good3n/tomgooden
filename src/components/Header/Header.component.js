import React from 'react'
import { Link } from 'gatsby'
import { Navigation } from '../Navigation'
import { StyledHeader } from './Header.styles'

const Header = () => (
  <StyledHeader>
    <div className="container">
      <div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
          >
            <path fill="#F52D86" d="M0 0h48v48H0z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="57"
            fill="none"
          >
            <path fill="#711CB4" d="m0 0 57 15.93L16.19 57 0 0Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="none"
          >
            <circle cx="28" cy="28" r="28" fill="#53CAEE" />
          </svg>
        </Link>
      </div>
      <Navigation />
    </div>
  </StyledHeader>
)

export default Header
