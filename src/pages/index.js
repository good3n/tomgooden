import React from 'react'
import Seo from '../components/Seo'
import ReactTypingEffect from 'react-typing-effect'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Home } from '../assets/styles/pages/Index.styles'

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Web Developer / Designer"
        description="I'm a Michigan based Developer and Designer who specializes in custom solutions for businesses including internal tooling a customer facing applications."
      />
      <Home>
        <div className="container">
          <div>
            <p>
              <ReactTypingEffect
                text={[
                  "import { Development } from 'tom-gooden'",
                  "import { Design } from 'tom-gooden'",
                  "import { Seo } from 'tom-gooden'",
                ]}
                speed={100}
                eraseSpeed={30}
              />
            </p>
            <h2>
              Digital <br />
              Thing-maker
            </h2>
            <nav>
              <Link to="/about">About</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path fill="#F52D86" d="M0 0h16v16H0z" />
              </svg>
              <Link to="/uses">Uses</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" fill="#53CAEE" />
              </svg>
              <Link to="/projects">Projects</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 15"
              >
                <path fill="#711CB4" d="m8.24 0 8.17 14.46H.21L8.24 0Z" />
              </svg>
              <Link to="/contact">Contact</Link>
            </nav>
            <h1>
              I'm a Michigan based Developer and Designer who specializes in
              custom solutions for businesses including internal tooling a
              customer facing applications.
            </h1>
          </div>
          <div className="image-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 657 549"
            >
              <path
                fill="#711CB4"
                fillOpacity=".1"
                d="m271 163 386 107.89L380.6 549 271 163Z"
              />
              <path fill="#53CAEE" fillOpacity=".1" d="M0 28h268v268H0z" />
              <circle
                cx="313.5"
                cy="216.5"
                r="216.5"
                fill="#F72585"
                fillOpacity=".2"
              />
            </svg>
            <StaticImage
              src="../assets/images/tom-gooden-web-design-development.png"
              alt="Tom Gooden"
              placeholder="blurred"
              aspectRatio={1 / 1}
              width={499}
              imgStyle={{
                filter: `grayscale(100%) contrast(150%)`,
              }}
              loading="lazy"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        </div>
      </Home>
    </Layout>
  )
}

export default IndexPage
