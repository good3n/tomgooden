import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import whoAreYou from '../assets/images/parks-and-rec-craig-who-even-are-you.gif'

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 899px) {
    padding-top: 3rem;
  }

  header {
    display: grid;
    grid-template-columns: 425px 1fr;
    gap: 100px;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 0;
    }

    img {
      border-radius: 40px 0 40px 0;
    }
  }

  h1 {
    margin-top: 0;

    @media (max-width: 899px) {
      font-size: var(--font-size__h3);
    }
  }

  h2 {
    font-size: var(--font-size__h4);
  }

  .blocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 4rem 0;

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      font-size: var(--font-size__base--sm);
      gap: 30px;

      @media (max-width: 899px) {
        flex-direction: column;
        gap: 1rem;

        .button {
          width: 100%;
          box-sizing: border-box;
          text-align: center;
        }
      }

      &:nth-of-type(1) {
        background: rgba(245, 45, 134, 0.1);
        color: rgb(245, 45, 134);

        span {
          font-family: var(--font-family__code);
          font-size: var(--font-size__h4);
        }
      }

      &:nth-of-type(2) {
        background: rgba(113, 28, 180, 0.1);
        color: rgb(113, 28, 180);

        a {
          background: rgb(113, 28, 180);
          font-family: var(--font-family__code);
          color: #fff;
        }
      }
    }

    p {
      margin: 0;
    }
  }
`

const AboutPage = () => (
  <Layout>
    <Seo title="About Tom Gooden" />
    <Wrapper className="container">
      <header>
        <div>
          <img alt="Who even are you" src={whoAreYou} />
        </div>
        <div>
          <h1>About me</h1>
          <p>
            My name is Tom Gooden and I&apos;m a Michigan based Developer and
            Designer who specializes in custom solutions for businesses
            including internal tooling a customer facing applications.
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
          Above all else I am a Dad to 3 kids and 2 dogs. During my downtime I
          like to learn new things that help expand my development skill-set,
          spend time outside doing things like fishing, camping, or small
          projects around the home.
        </p>
      </main>
    </Wrapper>
  </Layout>
)

export default AboutPage
