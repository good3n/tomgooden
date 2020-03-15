import React from 'react'
import { Link } from 'gatsby'
import { Navigation } from '../Navigation'
import { StyledHeader } from './Header.styles'
import { ThemeToggle } from '../../components/ThemeToggle'

const Header = props => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 636 363">
        <g fill="#000" fillRule="nonzero">
          <path d="M198.38 0h160.878c-36.115 60.5-54.172 121-54.172 181.5s18.057 121 54.172 181.5H198.38C160.127 302.5 141 242 141 181.5c0-8.648.39-17.297 1.173-25.945L140.156 157H92.102L0 0h198.38z" />
          <path d="M490.073 206h145.193L543.21 362.92l.047.08H382.38C344.127 302.5 325 242 325 181.5S344.127 60.5 382.38 0h160.878c-36.115 60.5-54.172 121-54.172 181.5 0 8.167.329 16.333.987 24.5z" />
        </g>
      </svg>
    </Link>
    <Navigation />
    <ThemeToggle
      isDarkMode={props.isDarkMode}
      setDarkMode={props.setDarkMode}
    />
  </StyledHeader>
)

export default Header
