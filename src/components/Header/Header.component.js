import React from "react"
import { Link } from "gatsby"
import { Navigation } from "../Navigation"
import { StyledHeader } from "./Header.styles"

const Header = () => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 636 363">
        <defs />
        <defs>
          <linearGradient id="a" x1="19.099%" x2="92.452%" y1=".826%" y2="94.992%">
            <stop offset="0%" />
            <stop offset="100%" stopColor="#493240" />
          </linearGradient>
          <linearGradient id="b" x1="90.207%" x2="21.476%" y1="15.92%" y2="94.086%">
            <stop offset="0%" />
            <stop offset="100%" stopColor="#2A0845" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="nonzero">
          <path fill="url(#a)" d="M198.38 0h160.878c-36.115 60.5-54.172 121-54.172 181.5s18.057 121 54.172 181.5H198.38C160.127 302.5 141 242 141 181.5c0-8.648.39-17.297 1.173-25.945L140.156 157H92.102L0 0h198.38z" />
          <path fill="url(#b)" d="M490.073 206h145.193L543.21 362.92l.047.08H382.38C344.127 302.5 325 242 325 181.5S344.127 60.5 382.38 0h160.878c-36.115 60.5-54.172 121-54.172 181.5 0 8.167.329 16.333.987 24.5z" />
        </g>
      </svg>
    </Link>
    <Navigation />
  </StyledHeader>
)

export default Header
