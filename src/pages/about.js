import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Wrapper = styled.div`
  padding-top: 100px;

  @media (max-width: 899px) {
    padding-top: 50px;
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
      background: var(--color__headline);
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

  h2 {
    font-size: var(--font-size__h4);
  }
`

const Block = styled.div`
  background-color: #eeeeff;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbdbf6' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 20px;
  padding: 50px 0;
  width: 60%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: 800px) {
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 620px) {
    display: block;
    text-align: center;

    > svg {
      display: block;
      margin: 0 auto 1rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (max-width: 620px) {
      margin: 0 auto;
    }

    svg {
      margin-right: 10px;
    }
  }
`

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Wrapper className="container">
      <span className="subheader">"Who even are you?"</span>
      <h1>A little about me</h1>
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
          My name is Tom Gooden and I’m a Michigan based Developer and Designer
          who specializes in custom solutions for businesses including internal
          tooling a customer facing applications.
        </p>
        <p>
          I’m a user-experience junkie, and for the past{' '}
          {new Date().getFullYear() - 2007}+ years I’ve been professionally
          creating websites and applications for businesses and governments of
          all sizes. My passion is coming up with ideas to make processes more
          efficient utilizing the JAMstack. You can usually catch me hanging out
          in the{' '}
          <OutboundLink
            href="https://discord.gg/KntFa9p"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeHelp discord server
          </OutboundLink>
          .
        </p>
        <Block>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="229"
            height="39"
            fill="none"
          >
            <path
              fill="#403EC6"
              d="M16.2 28.08v-5.24L6.12 17.6l10.08-5.24V7.12L.56 15.28v4.64l15.64 8.16ZM104.1 32h4.8l16.24-32h-4.8L104.1 32Zm108.55-3.92 15.64-8.16v-4.64l-15.64-8.16v5.24l10.08 5.24-10.08 5.24v5.24Z"
            />
            <path
              fill="#403EC6"
              d="M20.16 19.92c0 5.72 3.64 10.4 9.68 10.4 4.2 0 7.08-1.84 8.72-5.56l-4.24-1.8c-1 2.36-2.4 3.12-4.48 3.12-2.84 0-4.72-2.28-4.72-6.16 0-3.88 1.88-6.16 4.72-6.16 2.08 0 3.48.76 4.48 3.12l4.24-1.8c-1.64-3.72-4.52-5.56-8.72-5.56-6.04 0-9.68 4.68-9.68 10.4Zm20.73 0c0 5.72 3.92 10.4 9.92 10.4s9.92-4.68 9.92-10.4c0-5.72-3.92-10.4-9.92-10.4s-9.92 4.68-9.92 10.4Zm15.04 0c0 1.72-.44 3.16-1.36 4.36a4.37 4.37 0 0 1-3.76 1.8c-1.64 0-2.88-.6-3.8-1.8a7.14 7.14 0 0 1-1.32-4.36c0-1.72.44-3.16 1.32-4.36a4.49 4.49 0 0 1 3.8-1.8c1.64 0 2.88.6 3.76 1.8a6.92 6.92 0 0 1 1.36 4.36Zm6.56 0c0 6.36 3.28 10.4 9.2 10.4 2.28 0 4.24-1.24 4.88-2.4V30h4.96V1.68h-4.96v10a6.66 6.66 0 0 0-4.88-2.16c-5.92 0-9.2 4.04-9.2 10.4Zm14.52 0c0 3.88-1.92 6.16-4.64 6.16-2.72 0-4.68-2.32-4.68-6.16 0-3.88 1.96-6.16 4.68-6.16 2.72 0 4.64 2.28 4.64 6.16Zm6.69 0c0 5.08 3.04 10.4 9.68 10.4 4.2 0 7.24-1.68 9.16-5.04l-3.96-2.08c-1.24 1.92-2.88 2.88-4.92 2.88a4.93 4.93 0 0 1-5.08-4.56h14.2v-2.04c0-4.76-3-9.96-9.4-9.96-6.64 0-9.68 5.32-9.68 10.4Zm4.92-2.16c.44-2.28 2.2-4.16 4.76-4.16 2.68 0 4.2 1.72 4.72 4.16h-9.48Z"
            />
            <path
              fill="#403EC6"
              d="M126.7 30h4.97v-8.52c0-5.2 2.32-7.72 4.72-7.72 2.04 0 3 1.16 3 3.6V30h4.96V15.6c0-4-2.4-6.08-6.28-6.08a7.48 7.48 0 0 0-6.4 3.56V1.68h-4.96V30Zm20.61-10.08c0 5.08 3.04 10.4 9.68 10.4 4.2 0 7.24-1.68 9.16-5.04l-3.96-2.08c-1.24 1.92-2.88 2.88-4.92 2.88a4.93 4.93 0 0 1-5.08-4.56h14.2v-2.04c0-4.76-3-9.96-9.4-9.96-6.64 0-9.68 5.32-9.68 10.4Zm4.92-2.16c.44-2.28 2.2-4.16 4.76-4.16 2.68 0 4.2 1.72 4.72 4.16h-9.48Zm20.53 4.64c0 4.96 3.24 7.92 8 7.92 4.2 0 7.04-2.52 7.72-7.32l-4.36-.88c-.44 2.28-1.56 3.4-3.36 3.4-1.8 0-3.04-1.04-3.04-4.2V2H167.6v4.24h5.16V22.4Zm17.92 15.76h4.96v-10a6.66 6.66 0 0 0 4.88 2.16c5.92 0 9.2-4.04 9.2-10.4s-3.28-10.4-9.2-10.4c-2.28 0-4.24 1.24-4.88 2.4V9.84h-4.96v28.32Zm13.84-18.24c0 3.84-1.96 6.16-4.68 6.16-2.72 0-4.64-2.28-4.64-6.16 0-3.88 1.92-6.16 4.64-6.16 2.72 0 4.68 2.28 4.68 6.16Z"
            />
          </svg>
          <OutboundLink
            className="button"
            href="https://discord.gg/KntFa9p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="13"
              fill="none"
            >
              <path
                fill="#fff"
                d="m13.11 1.68-.02-.02a12.48 12.48 0 0 0-3.02-.89l-.02.02c-.13.24-.26.49-.37.74a11.64 11.64 0 0 0-3.36 0 7.33 7.33 0 0 0-.4-.76H5.9a12.45 12.45 0 0 0-3 .9A11.57 11.57 0 0 0 .72 9.76a12.39 12.39 0 0 0 3.7 1.79l.02-.02a8.32 8.32 0 0 0 .75-1.21.05.05 0 0 0-.02-.03A8.19 8.19 0 0 1 4 9.72V9.7l.02-.02a6.24 6.24 0 0 0 .27-.17 9.01 9.01 0 0 0 7.44 0 5.85 5.85 0 0 0 .24.21v.02l-.02.02a7.68 7.68 0 0 1-1.17.55.04.04 0 0 0 0 .04 9.36 9.36 0 0 0 .77 1.19h.03a12.35 12.35 0 0 0 3.7-1.82c.3-3.05-.52-5.7-2.18-8.04ZM5.56 8.1c-.72 0-1.32-.63-1.32-1.42 0-.78.59-1.42 1.32-1.42.74 0 1.33.64 1.32 1.42 0 .79-.58 1.42-1.32 1.42Zm4.89 0c-.73 0-1.32-.63-1.32-1.42 0-.78.58-1.42 1.32-1.42.74 0 1.33.64 1.32 1.42 0 .79-.58 1.42-1.32 1.42Z"
              />
            </svg>
            Join
          </OutboundLink>
        </Block>
        <h2>A little more...</h2>
        <p>
          Above all else I am a Dad to 3 kids and 2 dogs. During my downtime I
          like to learn new things that help expand my development skillset,
          spend time outside doing things like fishing, camping, or small
          projects around the home. Check out my{' '}
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
