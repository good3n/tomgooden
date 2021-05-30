import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { CheckInPortal } from '../components/Projects/CheckInPortal'
import { TherapistDirectory } from '../components/Projects/TherapistDirectory'
import { ProjectRoadmap } from '../components/ProjectRoadmap'
import { Cta } from '../components/Cta'
import { Work } from '../assets/styles/pages/Work.styles'

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <Work>
        <TherapistDirectory />
        <CheckInPortal />
      </Work>
      <ProjectRoadmap />
      <Cta />
    </Layout>
  )
}

export default WorkPage
