import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { CheckInPortal } from '../components/Projects/CheckInPortal'
import { TherapistDirectory } from '../components/Projects/TherapistDirectory'
import { ProjectRoadmap } from '../components/ProjectRoadmap'
import { Cta } from '../components/Cta'
import { Projects } from '../assets/styles/pages/Projects.styles'

const WorkPage = () => {
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

export default WorkPage
