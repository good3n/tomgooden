import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import Layout from "../components/layout"

const Title = styled.h1`
  font-size: 150px;
  font-weight: 700;
  line-height: 1;
  margin: 0 0 20px;
  letter-spacing: -5px;
`

const Text = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 1.6;
  color: #777;
  margin-bottom: 40px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Error - Page Not Found" />
    <Title>404</Title>
    <Text>Insert corny semi-creative 404 page text here. ¯\_(ツ)_/¯</Text>
    <Link to="/" style={{
      display: `flex`,
      alignItems: `center`,
      textDecoration: `none`,
      color: `#121212`,
      fontWeight: `700`
    }}>
      <svg style={{ width: `32px`, marginRight: `10px` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 904 904">
        <path fill="#121212" d="M0 452l327 229V537h577V367H327V223z" />
      </svg>
      <span>Back Home</span></Link>
  </Layout>
)

export default NotFoundPage
