import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #999;

  /* layout */
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
  
  a {
    text-decoration: none;
    color: #999;
    transition: 0.2s color ease;

    &:hover {
      color: #343434;
    }
  }

  > div:nth-of-type(2) {
    justify-self: end;

    @media (max-width: 899px) {
      justify-self: start;
      margin-top: 10px;
    }

    span {
      margin-left: 10px;

      @media (max-width: 899px) {
        margin: 0 5px;
      }
    }
  }
`

const Footer = () => (
  <StyledFooter className={`is-sans`}>
    <div>
      &copy; {new Date().getFullYear()}
      {` `}
      <a href="https://tomgooden.net">Tom Gooden</a>
    </div>
    <div>
      <span>
        Coded in <Link to="https://code.visualstudio.com/" rel="nofollow noopener noreferrer">VS Code</Link>.
      </span>
      <span>
        Built with <Link to="https://www.gatsbyjs.org/" rel="nofollow noopener noreferrer">Gatsby.js</Link>.
      </span>
      <span>
        Hosted on <Link to="https://www.netlify.com/" rel="nofollow noopener noreferrer">Netlify</Link>.
      </span>
    </div>
  </StyledFooter>
)

export default Footer
