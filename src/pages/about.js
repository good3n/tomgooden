import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 100px;

  @media (max-width: 899px) {
    padding-top: 50px;
  }

  h1 {
    padding-right: 180px;

    @media (max-width: 899px) {
      padding-right: 0;
      font-size: 1.5rem;
    }

    span {
      display: block;
      font-size: 6rem;

      @media (max-width: 899px) {
        font-size: 3rem;
      }
    }
  }

  .image-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin: 120px -100px 100px;

    @media (max-width: 1080px) {
      margin: 120px -10px 100px;
    }

    @media (max-width: 899px) {
      margin: 100px -10px 50px;
    }

    div {
      background: var(--color_heading-text);
      min-height: 150px;

      @media (max-width: 1080px) {
        min-height: 0;
      }

      &:nth-of-type(1) {
      }
      &:nth-of-type(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      &:nth-of-type(3) {
        grid-row: 1 / 3;
        margin-top: -30px;
      }
      &:nth-of-type(4) {
        grid-row: 1 / 3;
      }
      &:nth-of-type(5) {
        margin-top: -70px;
      }
      &:nth-of-type(6) {
        grid-row: 2 / 3;
      }
    }
  }
`

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Wrapper className="container">
      <h1>
        <span>I'm Tom</span>I build scalable custom web applications and sites.
      </h1>
      <div className="image-wrapper">
        <StaticImage src="../assets/images/about/about1.jpg" alt="" />
        <StaticImage src="../assets/images/about/about2.jpg" alt="" />
        <StaticImage src="../assets/images/about/about3.jpg" alt="" />
        <StaticImage src="../assets/images/about/about4.jpg" alt="" />
        <StaticImage src="../assets/images/about/about5.jpg" alt="" />
        <StaticImage src="../assets/images/about/about6.jpg" alt="" />
      </div>

      <main>
        <p>
          I am a Metro-Detroit based Front-end Developer and Designer with a
          focus on user experience and efficient semantic code. Over the last{' '}
          {new Date().getFullYear() - 2007}+ years, I've spent my professional
          time creating and developing websites and web applications for
          businesses and brands. Over the last couple years I've been
          "migrating" to the JAMstack and I am enjoying every minute of it.
        </p>
        <h2>Personal</h2>
        <p>
          I am the father of two daughters, which has shaped me in ways that I
          never would have imagined. During my downtime, I like to spend time
          with my family and <del>dog</del> dogs. When time permits, I also
          enjoy fishing, camping, reading, watching sports, fantasy football,
          home automation, gaming, and expanding my development skill set.
        </p>
        <p>
          You can usually catch me hanging out in the{' '}
          <a
            href="https://discord.gg/KntFa9p"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeHelp
          </a>{' '}
          discord server.
        </p>
        <h2>Uses</h2>
        <p>
          I plan on populating this section with some of the software and
          hardware I use to go about my development day. Stay tuned.
        </p>
      </main>

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
    </Wrapper>
  </Layout>
)

export default AboutPage
