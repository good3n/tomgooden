import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  min-height: calc(100vh - 255px);
  display: flex;
  align-items: center;

  @media (max-width: 899px) {
    min-height: calc(100vh - 238px);
  }
`

const Intro = styled.p`
  display: inline-block;
  font-size: 90px;
  font-weight: 700;
  line-height: 1;
  margin: 0 0 20px;
  width: 100%;
  height: 180px;
  font-family: var(--font_heading);
  color: #000;
  background: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animatedBackground 20s linear infinite alternate;

  @media (max-width: 899px) {
    font-size: 60px;
    height: auto;
  }

  @keyframes animatedBackground {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`

const Title = styled.h1`
  font-weight: 400;
  font-family: var(--font_body);
  color: #454545;
  font-size: 28px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 899px) {
    font-size: 24px;
  }
`

const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 32px);
  gap: 30px;

  a {
    &::before {
      display: none;
    }

    &:hover {
      &:nth-of-type(1) {
        /* twitter */
        path {
          fill: #08a0e9;
        }
      }
      &:nth-of-type(2) {
        /* github */
        path {
          fill: #423be4;
        }
      }
      &:nth-of-type(3) {
        /* linkedin */
        path {
          fill: #0077b5;
        }
      }
      &:nth-of-type(4) {
        /* mail */
        path {
          fill: #d1372d;
        }
      }
    }
  }

  svg {
    width: 100%;

    path {
      transition: 0.2s fill ease;
      fill: #343434;
    }
  }
`

export const data = graphql`
  query {
    file(relativePath: { eq: "colorwaves.png" }) {
      childImageSharp {
        fluid(maxWidth: 870) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    {console.log(data.file.childImageSharp.fluid.src)}
    <SEO title="Web Developer + Designer" />
    <Wrapper>
      <div>
        <Intro
          css={`
            background: none;
            background-image: url(${data.file.childImageSharp.fluid.src});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 1360px;
            background-position: 0px 0px;
            background-repeat: repeat-x;
            width: 100%;
          `}
        >
          Advanced Custom Solutions
        </Intro>
        <Title>
          Custom web applications <strong>designed &amp; developed</strong> in
          Metro Detroit, Michigan.
        </Title>
        <Social>
          <OutboundLink href="https://twitter.com/good3n/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -47 512 512">
              <path
                d="M512 56l-35 2 19-55s-60 22-75 26C382-7 323-8 281 18a97 97 0 00-47 100c-67-9-124-41-169-95L51 6 41 25a117 117 0 00-2 110l-12-5-1 21a108 108 0 0032 81h-6l8 23c10 30 31 54 58 67-27 11-49 19-85 30L0 363l30 17c12 6 53 27 93 34 90 14 191 2 259-59 57-52 76-125 72-201 0-12 3-23 9-32l49-66zm-73 49a78 78 0 00-15 50c4 77-17 137-62 178-53 47-138 66-234 51-18-3-36-9-50-15 30-10 53-19 91-37l52-25-58-4c-28-1-51-15-65-37 8 0 15-1 22-3l55-16-55-13a83 83 0 01-62-60l23 4 51 5-41-32a86 86 0 01-32-90c92 95 199 88 210 90l-3-25a69 69 0 0130-83c29-17 74-20 106 9 7 6 16 9 25 7l20-7-13 37h17l-12 16zm0 0"
                className="active-path"
                data-old_color="##D0EFA"
                data-original="#000000"
              />
            </svg>
          </OutboundLink>
          <OutboundLink href="https://github.com/good3n/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 0a256 256 0 100 512 256 256 0 000-512zm45 478a222 222 0 01-90 0v-71c0-16 5-22 11-31l18-27-23-3c-59-9-83-40-92-64-12-32-6-72 16-98 3-4 6-10 3-17-4-14-4-36-1-44 16 2 33 13 46 22 7 3 10 2 13 3 11-3 28-8 54-8 17 0 34 2 50 7 3 0 8 2 17-2 14-9 30-20 46-22 3 8 3 30-1 44-3 7 0 13 3 17 22 26 28 66 16 98-9 24-33 55-92 64l-23 3 19 27c5 9 10 15 10 31zm30-9v-62c0-17-4-28-8-37 45-12 78-39 92-78 15-40 8-89-17-123 4-20 4-52-6-67-5-6-12-10-20-10-24 1-42 13-62 25a212 212 0 00-108 0c-21-13-39-24-63-25-7 0-14 4-19 10-10 15-10 47-6 67-25 34-32 83-17 123 14 39 47 66 92 78-3 7-6 15-7 27-10 3-18 4-25 2-8-3-14-8-19-17-12-20-33-36-56-34l3 30c11-1 21 10 27 20 9 15 21 25 36 29 12 4 22 4 33 1v41a225 225 0 11301-212c0 98-64 181-151 212zm0 0"
                className="active-path"
                data-old_color="#000000"
                data-original="#000000"
              />
            </svg>
          </OutboundLink>
          <OutboundLink href="https://www.linkedin.com/in/tom-gooden/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M437 0H75C34 0 0 34 0 75v362c0 41 34 75 75 75h362c41 0 75-34 75-75V75c0-41-34-75-75-75zm45 437c0 25-20 45-45 45H75c-25 0-45-20-45-45V75c0-25 20-45 45-45h362c25 0 45 20 45 45zm0 0"
                className="active-path"
                data-old_color="#000000"
                data-original="#000000"
              />
              <path
                d="M91 422h90V210H91zm30-182h30v152h-30zm0 0M331 210c-10 0-20 2-30 5v-5h-90v212h90V315a15 15 0 0130 0v107h90V305c0-49-39-95-90-95zm60 182h-30v-77a45 45 0 00-90 0v77h-30V240h30v30l24-18c10-8 23-12 36-12 32 0 60 30 60 65zm0 0M91 180h90V90H91zm30-60h30v30h-30zm0 0"
                className="active-path"
                data-old_color="#000000"
                data-original="#000000"
              />
            </svg>
          </OutboundLink>
          <OutboundLink href="mailto:good3n@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 -35 512 511">
              <path
                d="M121 253l64 159 83-83 141 113L512 0 0 206zm-39-47l244-98-195 117zm287-90L207 264l-19 74-36-90zM219 336l10-37 15 12zm172 53L243 272 465 69zm0 0"
                className="active-path"
                data-old_color="#000000"
                data-original="#000000"
              />
            </svg>
          </OutboundLink>
        </Social>
      </div>
    </Wrapper>
  </Layout>
)

export default IndexPage
