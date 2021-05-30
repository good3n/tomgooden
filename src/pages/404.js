import React from 'react'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: calc(100vh - 255px);
  display: flex;
  align-items: center;

  @media (max-width: 899px) {
    min-height: calc(100vh - 272px);
  }

  h1 {
    font-size: 150px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 20px;
    letter-spacing: -5px;
  }

  p {
    font-weight: 300;
    font-size: 21px;
    line-height: 1.6;
    color: #777;
    margin-bottom: 40px;
  }

  svg {
    position: relative;
    top: 8px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Error - Page Not Found" />
    <Wrapper>
      <div>
        {/* <StaticImage src="../images/404.png" alt="404 not found" /> */}
        <h1>404</h1>
        <p>Insert corny semi-creative 404 page text here. ¯\_(ツ)_/¯ !</p>
        <Link
          to="/"
          style={{
            display: `inline-block`,
            textDecoration: `none`,
            color: `#121212`,
            fontWeight: `700`,
          }}
        >
          <svg
            style={{ width: `32px`, marginRight: `10px` }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 904 904"
          >
            <path fill="#121212" d="M0 452l327 229V537h577V367H327V223z" />
          </svg>
          <span>Back Home</span>
        </Link>
      </div>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
