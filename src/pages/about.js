import React from 'react'
import { Link } from 'gatsby'
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
    font-size: var(--font-size__big-ass);

    @media (max-width: 899px) {
      font-size: var(--font-size__h1);
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
      <h1>Hi 👋 I'm Tom.</h1>
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
        <p>
          Check out my{' '}
          <strong>
            <Link to="/uses">/uses</Link>
          </strong>{' '}
          page for a list of stuff I use day-to-day.
        </p>
      </main>
    </Wrapper>
  </Layout>
)

export default AboutPage
