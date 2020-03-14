import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: calc(100vh - 255px);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 50px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 30px;

    .gatsby-image-wrapper {
      grid-row: 1 / 2;
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <div>
        <h1>About</h1>
        <Grid>
          <Img
            fluid={data.tom.childImageSharp.fluid}
            alt=""
            style={{ width: `180px`, height: `180px`, borderRadius: `2px` }}
          />
          <div>
            <p>
              I am a Metro-Detroit based Front-end Developer and Designer with a
              focus on user experience and efficient semantic code. Over the
              last {new Date().getFullYear() - 2007} years, I've spent my
              professional time creating and developing websites and web
              applications for businesses and brands. I like to think I am in
              LAMP stack anonymous, allowing the JAMstack to slowly consume my
              development environment.
            </p>
            <p>
              During my downtime, I like to spend time with my family and{' '}
              <del>dog</del> two dogs, go fishing when the weather permits,
              binge watch a television series, or learn something new in web
              development. I'm also a Podcast junky. If you have some solid
              recommendations, then please feel free to{' '}
              <Link to="/contact/">email</Link>, or drop me a line on{' '}
              <a
                href="https://twitter.com/good3n/"
                rel="nofollow noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </Grid>

        {/* <h2>Uses</h2>
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
      </div>
    </Wrapper>
  </Layout>
)

export default AboutPage

export const squareImage = graphql`
  query {
    tom: file(relativePath: { eq: "about/tom-gooden.png" }) {
      childImageSharp {
        fluid(maxWidth: 180, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
