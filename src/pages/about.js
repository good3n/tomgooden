import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import whoAreYou from '../assets/images/parks-and-rec-craig-who-even-are-you.gif'
import { About } from '../assets/styles/pages/About.styles'

const AboutPage = () => (
  <Layout>
    <Seo title="About Tom Gooden" />
    <About className="container">
      <header>
        <div>
          <img alt="Who even are you" src={whoAreYou} />
        </div>
        <div>
          <h1>About me</h1>
          <p>
            My name is Tom Gooden and I&apos;m a Texas based Developer and
            Designer who specializes in custom solutions for businesses
            including internal tooling and customer facing applications.
          </p>
        </div>
      </header>
      <main>
        <p>
          I&apos;m a user-experience junkie, and for the past{' '}
          {new Date().getFullYear() - 2007}+ years I&apos;ve been professionally
          creating websites and applications for businesses and governments of
          all sizes. My passion is coming up with ideas to make processes more
          efficient utilizing the JAMstack. You can usually catch me hanging out
          in the{' '}
          <OutboundLink
            href="https://discord.gg/KntFa9p"
            rel="noopener noreferrer"
            target="_blank"
          >
            CodeHelp discord server
          </OutboundLink>
          .
        </p>
        <div className="blocks">
          <div>
            <span>{`<code/help>`}</span>
            <OutboundLink
              className="button"
              href="https://discord.gg/KntFa9p"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join
            </OutboundLink>
          </div>
          <div>
            <p>
              Here is a list of goodies I’ve compiled that I use in design,
              development, and just everyday life.
            </p>
            <Link className="button" to="/uses/">
              Uses
            </Link>
          </div>
        </div>

        <h2>A little more...</h2>
        <p>
          Above all else I am a Dad to 3 kids and{' '}
          <span className="strike">2</span> <span className="strike">3</span>5
          dogs. During my downtime I like to learn new things that help expand
          my development skill-set, comic and MTG collecting, spending time
          outside, fishing and camping.
        </p>
      </main>
    </About>
  </Layout>
)

export default AboutPage
