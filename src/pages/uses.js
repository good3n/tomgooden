import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledUses } from '../assets/styles/pages/Uses.styles'

const UsesPage = () => (
  <Layout>
    <Seo title="Uses" />
    <StyledUses>
      <header className="container">
        <StaticImage
          src="../assets/images/uses.jpeg"
          alt=""
          objectFit="cover"
          objectPosition="center -50px"
          height={470}
        />
        <div>
          <h1>/uses</h1>
          <p>
            A list of goodies that I use in my work and personal life. Checkout
            more uses at{' '}
            <a href="https://uses.tech/" rel="nofollow">
              uses.tech
            </a>
            .
          </p>
        </div>
      </header>
      <div className="container container--skinny">
        <div>
          <h2>Hardware</h2>
          <ul>
            <li>
              💻 MacBookPro 15" 2015 and 15" 2017{' '}
              <span>
                2015 MBP is the best machine ever made, change my mind.
              </span>
            </li>
            <li>
              🖥 x2 Dell U2719D Monitor's{' '}
              <span>
                In my experience, Dell's monitor quality is unmatched.
              </span>
            </li>
            <li>
              ⌨️ Apple Magic Keyboard <span>I enjoy the simplicity.</span>
            </li>
            <li>
              🖱 Apple Magic Mouse <span>I still enjoy the simplicity.</span>
            </li>
            <li>
              🎤 Blue Yeti Microphone <span>Not bad for a USB mic.</span>
            </li>
            <li>
              🎥 Logitech C920 Pro HD Webcam{' '}
              <span>Solid quality for less than a hundred bucks.</span>
            </li>
            <li>
              💺 Secretlab Titan 2020{' '}
              <span>Comfortable awesome looking chair.</span>
            </li>
            <li>
              🎒 eBags Pro Laptop Backpack{' '}
              <span>Extremely awesome tech backpack.</span>
            </li>
          </ul>
        </div>
        <div className="grid">
          <ul>
            <h2>Software &amp; Apps</h2>
            <li>iTerm2</li>
            <li>Alfred</li>
            <li>Sizzy</li>

            <h3>Design</h3>
            <li>Figma</li>
            <li>SVGOMG</li>
            <li>Heroicons</li>

            <h3>SEO &amp; Marketing</h3>
            <li>SEMrush</li>
            <li>Screaming Frog</li>

            <h3>Git, Building, Hosting, Monitoring</h3>
            <li>GitHub</li>
            <li>TravisCI</li>
            <li>Gatsby Cloud</li>
            <li>Netlify</li>
            <li>Sentry</li>
            <li>AWS S3 &amp; Amplify</li>
          </ul>

          <ul>
            <h2>IDE &amp; Extensions</h2>
            <li>VSCode</li>
            <li>Dracula Theme</li>
            <li>Operator Mono Ligatures Font</li>
            <li>Better Comments</li>
            <li>Auto Rename Tag</li>
            <li>GitLens</li>
            <li>Import Cost</li>
            <li>Prettier &amp; ESLint</li>
            <li>Rainbow Brackets</li>

            <h3>React</h3>
            <li>
              <a href="https://www.gatsbyjs.com/" rel="nofollow">
                GatsbyJS
              </a>
              <a href="https://nextjs.org/" rel="nofollow">
                NextJS
              </a>
            </li>

            <h3>WordPress</h3>
            <li>
              <a href="https://underscores.me/" rel="nofollow">
                Underscores
              </a>
            </li>
            <li>
              <a href="https://laravel.com/docs/8.x/valet" rel="nofollow">
                Laravel Valet
              </a>
            </li>
            <li>
              <a
                href="https://www.advancedcustomfields.com/pro/"
                rel="nofollow"
              >
                Advanced Custom Fields
              </a>
            </li>
            <li>
              <a href="https://www.wpgraphql.com/" rel="nofollow">
                WPGraphQL
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledUses>
  </Layout>
)

export default UsesPage
