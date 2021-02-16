import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'
import SEO from '../components/seo'
import ReactRotatingText from 'react-rotating-text'
import { Hero, Services, Roadmap, Cta } from '../page-styles/index.styles'

export const data = graphql`
  query {
    file(relativePath: { eq: "border.png" }) {
      childImageSharp {
        fixed(width: 1300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const IndexPage = ({ data }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 350, friction: 40 },
  }))

  return (
    <>
      <SEO title="Web Developer + Designer" />
      <Hero className="container">
        <h1>
          <span className="block">Digital</span>{' '}
          <span className="text">
            <ReactRotatingText
              items={['storyteller', 'creative', 'strategist', 'thing maker']}
              typingInterval="100"
            />
          </span>
        </h1>
        <p>User-focused strategies and solutions for people and businesses.</p>
      </Hero>
      <Services>
        <div>
          <span>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 37"
              >
                <defs />
                <path
                  fill="#9BDEAC"
                  d="M16.6666 18.6667H4.99992c-.92048 0-1.66667.7462-1.66667 1.6667v11.6667c0 .9205.74619 1.6666 1.66667 1.6666H16.6666c.9205 0 1.6667-.7461 1.6667-1.6666V20.3334c0-.9205-.7462-1.6667-1.6667-1.6667z"
                />
                <path
                  fill="#56CBF9"
                  d="M35.0001.33325H23.3334c-.9205 0-1.6667.74619-1.6667 1.66667V13.6666c0 .9205.7462 1.6667 1.6667 1.6667h11.6667c.9205 0 1.6666-.7462 1.6666-1.6667V1.99992c0-.92048-.7461-1.66667-1.6666-1.66667z"
                />
                <path
                  fill="#FFEA9F"
                  d="M35.0001 18.6667H23.3334c-.9205 0-1.6667.7462-1.6667 1.6667v11.6667c0 .9205.7462 1.6666 1.6667 1.6666h11.6667c.9205 0 1.6666-.7461 1.6666-1.6666V20.3334c0-.9205-.7461-1.6667-1.6666-1.6667z"
                />
              </svg>
              Development
            </h2>
            <p>
              Custom developed applications from the ground up. Integrating with
              APIs and external systems to create solutions to enhance your
              productivity and user conversions.
            </p>
          </span>
        </div>
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 34 34"
            >
              <defs />
              <path
                fill="#FFEA9F"
                d="M1.99992.33325H13.3333c1.1045 0 2 .89543 2 2V31.6666c0 1.1046-.8955 2-2 2H1.99992c-.92047 0-1.66667-.7462-1.66667-1.6667V1.99992c0-.92047.7462-1.66667 1.66667-1.66667z"
              />
              <path
                fill="#FC0055"
                d="M18.6667 2.33325c0-1.10457.8955-2 2-2h11.3334c.9204 0 1.6666.7462 1.6666 1.66667V31.9999c0 .9205-.7462 1.6667-1.6666 1.6667H20.6667c-1.1045 0-2-.8954-2-2V2.33325z"
              />
            </svg>
            Digital Strategy
          </h2>
          <p>
            Creating a digital product or application is more than just putting
            good ideas together. It’s a thought and data driven system.
          </p>
        </div>
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
            >
              <defs />
              <path
                fill="#FC0055"
                d="M25 3.33325c-5.6286.00237-10.4525 4.02437-11.467 9.56085 4.8448-2.6512 10.9216-.8729 13.5729 3.972 1.6367 2.991 1.6367 6.6099 0 9.6009 6.3355-1.1606 10.5306-7.2373 9.37-13.5728C35.4611 7.35427 30.6321 3.33112 25 3.33325z"
              />
              <path
                fill="#56CBF9"
                d="M11.6666 36.6667c4.6024 0 8.3333-3.731 8.3333-8.3334C19.9999 23.731 16.269 20 11.6666 20c-4.60239 0-8.33335 3.731-8.33335 8.3333 0 4.6024 3.73096 8.3334 8.33335 8.3334z"
              />
              <path
                fill="#FFEA9F"
                d="M18.3333 11.6667c-5.139.0006-9.44102 3.896-9.95 9.0097 4.2263-1.8158 9.1245.1383 10.9403 4.3647.9019 2.0991.9019 4.4765 0 6.5756 5.4955-.5464 9.5075-5.4443 8.9611-10.9398-.5086-5.1146-4.8116-9.0106-9.9514-9.0102z"
              />
            </svg>
            UI / UX
          </h2>
          <p>
            The web is built for the user. User focused design and interaction
            is paramount.
          </p>
        </div>
        <div>
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
            >
              <defs />
              <path
                fill="#FC0055"
                d="M27.7488 6.17851l8.0139 8.01389c.7811.781.781 2.0474 0 2.8284L24.1453 28.6382c-.7811.7811-2.0474.7811-2.8285 0l-8.0138-8.0138c-.6509-.6509-.8552-1.5019-.4562-1.9008L25.848 5.72229c.3989-.39891 1.25-.19465 1.9008.45622z"
              />
              <path
                fill="#56CBF9"
                d="M4.17851 14.4282l8.01389-8.0139c.781-.78105 2.0474-.78105 2.8284 0l20.7418 20.7418c.7811.7811.7811 2.0474 0 2.8284l-8.0139 8.0139c-.6508.6509-1.7061.6509-2.357 0L4.17851 16.7852c-.65087-.6509-.65087-1.7062 0-2.357z"
              />
            </svg>
            Consulting
          </h2>
          <p>
            From the basics to best practices, you likely have a lot of
            questions.
          </p>
        </div>
      </Services>
      <Roadmap>
        <div>
          <h2>Project roadmap</h2>
          <p>
            The "4 D's" as some call it, a common approach to deciphering the
            lifecycle of a website or application project. However more often
            than not, it's become lip service. That's not the case here.
            Planning is everything. Without implementing and executing a real
            plan of action, your project will begin to take on water.
          </p>
        </div>
        <div className="container">
          <Img fixed={data.file.childImageSharp.fixed} />
          <ul>
            <li>
              <h3>1. Discover</h3>
              <p>
                To determine the real scope of the work, we'll work closely
                together to learn your goals and pain points. This step is
                important to ensure we identify what problems we will be
                solving.
              </p>
            </li>
            <li>
              <h3>2. Design</h3>
              <p>
                Based on the findings of discovery, your project will be planned
                from start to finish. Deliverable timelines will be established,
                as well as initial concepts created.
              </p>
            </li>
            <li>
              <h3>3. Develop</h3>
              <p>
                With the planning done, it's time to start bringing these ideas
                to life. Each project has a strict development process to ensure
                quality is met.
              </p>
            </li>
            <li>
              <h3>4. Deploy</h3>
              <p>
                The final phase in the roadmap. Your application will be tested
                and then deployed. This isn't the end of the overall journey
                however. Digital tools require ongoing attention and care.
              </p>
            </li>
          </ul>
        </div>
      </Roadmap>
      <Cta className="container">
        <h2>Let's talk about your next project</h2>
        <animated.div
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Link to="/contact">Get in touch</Link>
        </animated.div>
      </Cta>
    </>
  )
}

export default IndexPage
