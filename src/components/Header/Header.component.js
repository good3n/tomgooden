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
            fill="none"
            height="48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48H0z" fill="#F52D86" />
          </svg>

          <svg
            fill="none"
            height="57"
            width="57"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0 57 15.93L16.19 57 0 0Z" fill="#711CB4" />
          </svg>

          <svg
            fill="none"
            height="56"
            width="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" fill="#53CAEE" r="28" />
          </svg>
        </Link>
      </div>
      <Navigation />
    </div>
  </StyledHeader>
)

export default Header
