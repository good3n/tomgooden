import React from 'react'
import Seo from '../components/Seo'
import ReactRotatingText from 'react-rotating-text'
import Layout from '../components/Layout'
import { Hero } from '../assets/styles/pages/Index.styles'
import { Cta } from '../components/Cta'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Web Developer + Designer" />
      <Hero className="container">
        <h1>
          <span className="block">Digital</span>{' '}
          <span className="text">
            <ReactRotatingText
              items={['storyteller', 'creative', 'strategist', 'thing maker']}
              typingInterval={100}
            />
          </span>
        </h1>
        <p>
          Making the web a better place by crafting custom websites and
          applications for people and businesses.
        </p>
      </Hero>
      <Cta />
    </Layout>
  )
}

export default IndexPage
