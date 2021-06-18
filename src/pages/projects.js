import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { Projects } from '../assets/styles/pages/Projects.styles'
import { CheckInPortal } from '../components/Projects/CheckInPortal'
import { TherapistDirectory } from '../components/Projects/TherapistDirectory'
import { ProjectRoadmap } from '../components/ProjectRoadmap'
import { Cta } from '../components/Cta'

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <Projects>
        <TherapistDirectory />
        <CheckInPortal />
      </Projects>
      <ProjectRoadmap />
      <Cta />
    </Layout>
  )
}

export default ProjectsPage
