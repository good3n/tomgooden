import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import styled from 'styled-components'

const MainImage = styled(Img)`
  max-width: 730px;
  margin: 0 auto;
  position: relative;
  left: -40px;

  @media (max-width: 600px) {
    left: -30px;
    left: -6%;
  }
`

const SubImage = styled(Img)`
  max-width: 760px;
  position: relative;
  right: -50px;

  @media (max-width: 899px) {
    right: auto;
    left: -70px;
    margin-top: -200px;
  }

  @media (max-width: 600px) {
    left: 0;
    margin-top: -100px;
  }
`

const WorkOne = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 100px;

  @media (max-width: 899px) {
    padding-top: 50px;
  }

  @media (max-width: 600px) {
    padding-top: 30px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -138px;
    right: 0;
    left: 0;
    height: 700px;
    background: var(--color_blue);
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 100%);

    @media (max-width: 899px) {
      clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
      top: -150px;
    }

    @media (max-width: 600px) {
      height: 500px;
    }

    @media (max-width: 450px) {
      height: 400px;
    }
  }
`

const Work = styled.div`
  h1 {
    font-size: var(--font-size__big-ass);

    @media (max-width: 1175px) {
      font-size: var(--font-size__medium-ass);
    }

    @media (max-width: 899px) {
      font-size: var(--font-size__h1);
    }

    span {
      display: block;
      color: var(--color_blue);
      font-size: var(--font-size__h5);
      letter-spacing: 3px;
      font-weight: bold;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 760px;
    gap: 50px;
    margin-top: 50px;

    @media (max-width: 899px) {
      grid-template-columns: 1fr;
    }

    > div:first-of-type {
      position: relative;
      z-index: 1;
      margin-right: -220px;

      @media (max-width: 899px) {
        margin-right: 0;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: var(--font-size__h4);
    color: ${props => props.theme.colors.headingText};
  }

  li {
    display: block;
    margin: 0;
    display: flex;
    align-items: center;
    line-height: 40px;

    svg {
      height: 24px;
      width: 24px;
      margin-right: 20px;
    }
  }
`

const ListItem = ({ text }) => (
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <defs />
      <path
        stroke="#56CBF9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12H3m14-4l4 4-4-4zm4 4l-4 4 4-4z"
      />
    </svg>
    <span>{text}</span>
  </li>
)

const WorkPage = ({ data }) => (
  <Work>
    <SEO title="Work" />
    <WorkOne>
      <div className="container">
        <MainImage
          fluid={data.image1.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
        <div className="grid">
          <div>
            <h1>
              <span>GLPG</span>Patient check-in portal
            </h1>
            <p>
              A portal designed and developed allowing patients to self check-in
              via an in-office kiosk, or mobile check-in in advance.
            </p>
            <ul>
              <ListItem text="React" />
              <ListItem text="GatsbyJS" />
              <ListItem text="AWS Amplify" />
              <ListItem text="Podio API" />
            </ul>
          </div>
          <div>
            <SubImage
              fluid={data.image2.childImageSharp.fluid}
              imgStyle={{ objectFit: `cover` }}
              alt=""
            />
          </div>
        </div>
      </div>
    </WorkOne>
  </Work>
)

export default WorkPage

export const mainImage = graphql`
  fragment mainImage on File {
    childImageSharp {
      fluid(maxWidth: 730, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const subImage = graphql`
  fragment subImage on File {
    childImageSharp {
      fluid(maxWidth: 760, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(
      relativePath: { eq: "mockups/checkin-portal-glpg-ipad-mockup.png" }
    ) {
      ...mainImage
    }
    image2: file(
      relativePath: { eq: "mockups/checkin-portal-glpg-mobile-mockup.png" }
    ) {
      ...subImage
    }
  }
`
