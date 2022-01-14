import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Roadmap } from './ProjectRoadmap.styles'

const ProjectRoadmap = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "border.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1300
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const image = getImage(data.file)
  return (
    <Roadmap>
      <div>
        <h2>Project roadmap</h2>
        <p>
          The &quot;4 D&apos;s&quot; as some call it, a common approach to
          deciphering the lifecycle of a website or application project.
          Planning is everything. Without implementing and executing a real plan
          of action, your project will begin to take on water.
        </p>
      </div>
      <div className="container">
        <GatsbyImage alt="Lines" image={image} />
        <ul>
          <li>
            <h3>1. Discover</h3>
            <p>
              To determine the real scope of the work, we&apos;ll work closely
              together to learn your goals and pain points. This step is
              important to ensure we identify what problems we will be solving.
            </p>
          </li>
          <li>
            <h3>2. Design</h3>
            <p>
              Based on the findings of discovery, your project will be planned
              from start to finish. Deliverable timelines will be established,
              as well as initial concepts created.
            </p>
          </li>
          <li>
            <h3>3. Develop</h3>
            <p>
              With the planning done, it&apos;s time to start bringing these
              ideas to life. Each project has a strict development process to
              ensure quality is met.
            </p>
          </li>
          <li>
            <h3>4. Deploy</h3>
            <p>
              The final phase in the roadmap. Your application will be tested
              and then deployed. This isn&apos;t the end of the overall journey
              however. Digital tools require ongoing attention and care.
            </p>
          </li>
        </ul>
      </div>
    </Roadmap>
  )
}

export default ProjectRoadmap
