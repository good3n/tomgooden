import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import cobraKai from '../assets/images/send-it-to-the-internet.gif'

const Thanks = styled.div`
  text-align: center;

  a {
    color: var(--color_blue);
    font-weight: bold;
    text-decoration: underline;
  }

  img {
    display: block;
    margin: 50px auto 100px;
  }
`

const ThanksPage = () => (
  <Layout>
    <Seo title="Thank you!" />
    <Thanks className="container">
      <h1>Sent!</h1>
      <p>
        Thanks for reaching out. Please allow up to 1-2 business days for a
        reply.
      </p>
      <Link to="/">Back home</Link>
      <img alt="Send it to the internet!" src={cobraKai} />
    </Thanks>
  </Layout>
)

export default ThanksPage
