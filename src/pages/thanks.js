import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import cobraKai from '../assets/images/send-it-to-the-internet.gif'
import { Thanks } from '../assets/styles/pages/Thanks.styles'

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
