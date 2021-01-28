import React from 'react'
import SEO from '../components/seo'
import ReactRotatingText from 'react-rotating-text'
import { Hero, Services } from '../page-styles/index.styles'

const IndexPage = () => (
  <>
    <SEO title="Web Developer + Designer" />
    <Hero>
      <h1>
        <span className="block">Digital</span>{' '}
        <span className="text">
          <ReactRotatingText
            items={['storyteller', 'creator', 'strategist']}
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
            Creating a digital product or application is more than just putting
            good ideas together. It’s a system, that requires thought and data.
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
          The web is built for the user. User focused design and interaction is
          paramount.
        </p>
      </div>
      <div>
        <h2>IDK</h2>
        <p>
          The web is built for the user. User focused design and interaction is
          paramount.
        </p>
      </div>
    </Services>
  </>
)

export default IndexPage
