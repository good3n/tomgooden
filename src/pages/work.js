import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import styled from 'styled-components'

const WorkItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }

  div {
    width: 100%;
    background: #000;
    min-height: 286px;
    position: relative;
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  /* glpg brochure */
  .work2 {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  /* revize victor */
  .work3 {
    @media (max-width: 660px) {
      grid-row: 4 / 5;
      grid-column: 1 / 2;
    }
  }

  /* jmk */
  .work4 {
    @media (max-width: 660px) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }

  /* glpg mobile */
  .work5 {
    grid-row: 2 / 4;
    grid-column: 3 / 4;

    @media (max-width: 660px) {
      grid-row: 4 / 5;
      grid-column: 2 / 3;
    }
  }

  /* manawire */
  .work6 {
    grid-column: 1 / 3;

    @media (max-width: 660px) {
      grid-row: 3 / 4;
    }
  }
`

const WorkPage = ({ data }) => (
  <>
    <SEO title="Work" />
    <h1>Work</h1>
    <WorkItems>
      <div className="work1">
        <Img
          fluid={data.image3.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
      <div className="work2">
        <Img
          fluid={data.image1.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
      <div className="work3">
        <Img
          fluid={data.image2.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
      <div className="work4">
        <Img
          fluid={data.image4.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
      <div className="work5">
        <Img
          fluid={data.image6.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
      <div className="work6">
        <Img
          fluid={data.image5.childImageSharp.fluid}
          imgStyle={{ objectFit: `cover` }}
          alt=""
        />
      </div>
    </WorkItems>
  </>
)

export default WorkPage

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 500, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "work/glpg-brochure.png" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "work/revize-victor.png" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "work/tom-gooden-michigan-tinting.png" }) {
      ...squareImage
    }
    image4: file(relativePath: { eq: "work/tom-gooden-jmkpm.png" }) {
      ...squareImage
    }
    image5: file(relativePath: { eq: "work/tom-gooden-manawire.png" }) {
      ...squareImage
    }
    image6: file(relativePath: { eq: "work/tom-gooden-glpg.png" }) {
      ...squareImage
    }
  }
`
