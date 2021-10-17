import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from 'styled-components'
import cobraKai from '../assets/images/send-it-to-the-internet.gif'

const Thanks = styled.div`
  text-align: center;

  h1 {
    font-size: var(--font-size__h0);
  }

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

const ThanksPage = ({ data }) => (
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

      {/*
        <ul>
          <li>MacBookPro 15" 2015 and 15" 2018</li>
          <li>Monitors</li>
          <li>Keyboard &amp; Mouse</li>
          <li>Webcam / Mic</li>
          <li>Desk / Chair</li>
          <li>Alfred</li>
          <li>VS Code</li>
          <li>Dracula Theme</li>
          <li>Fira Code</li>
          <li>Sketch</li>
          <li>Discord / Slack</li>
          <li>Screaming Frog</li>
          <li>GatsbyJS</li>
          <li>Firefox</li>
          <li>SVGOMG</li>
          <li>Dropbox</li>
          <li>Backpack</li>
        </ul> */}
    </Thanks>
  </Layout>
)

export default ThanksPage
