import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Home } from '../assets/styles/pages/Index.styles'

const IndexPage = () => (
  <Layout>
    <Seo
      description="I'm a Texas based Developer and Designer who specializes in custom solutions for businesses including internal tooling and customer facing applications."
      title="Web Developer / Designer"
    />
    <Home>
      <div className="container">
        <div>
          <div className="type">
            <ReactTypingEffect
              eraseSpeed={30}
              speed={100}
              text={[
                "import { Development } from 'tom-gooden'",
                "import { Design } from 'tom-gooden'",
                "import { Seo } from 'tom-gooden'",
              ]}
            />
          </div>
          <h2>
            Digital <br />
            Thing-maker
          </h2>
          <nav>
            <Link to="/about">About</Link>
            <svg
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h16v16H0z" fill="#F52D86" />
            </svg>
            <Link to="/uses">Uses</Link>
            <svg
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" fill="#53CAEE" r="8" />
            </svg>
            <Link to="/projects">Projects</Link>
            <svg
              fill="none"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m8.24 0 8.17 14.46H.21L8.24 0Z" fill="#711CB4" />
            </svg>
            <Link to="/contact">Contact</Link>
          </nav>
          <h1>
            I&apos;m a Texas based Developer and Designer who specializes in
            custom solutions for businesses including internal tooling and
            customer facing applications.
          </h1>
        </div>
        <div className="image-wrap">
          <svg
            fill="none"
            viewBox="0 0 657 549"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m271 163 386 107.89L380.6 549 271 163Z"
              fill="#711CB4"
              fillOpacity=".1"
            />
            <path d="M0 28h268v268H0z" fill="#53CAEE" fillOpacity=".1" />
            <circle
              cx="313.5"
              cy="216.5"
              fill="#F72585"
              fillOpacity=".2"
              r="216.5"
            />
          </svg>
          <StaticImage
            alt="Tom Gooden"
            aspectRatio={1 / 1}
            imgStyle={{
              filter: `grayscale(100%) contrast(150%)`,
            }}
            placeholder="tracedSVG"
            src="../assets/images/tom-gooden-web-design-development.png"
            width={499}
          />
        </div>
      </div>
    </Home>
  </Layout>
)

export default IndexPage
