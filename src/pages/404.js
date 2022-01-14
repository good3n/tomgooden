import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import { NotFound } from '../assets/styles/pages/404.styles'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Error - Page Not Found" />
    <Helmet
      bodyAttributes={{
        class: 'not-found',
      }}
    />
    <NotFound>
      <div className="container">
        <StaticImage
          alt="404 not found"
          backgroundColor="#D5E9F6"
          className="lost-man"
          src="../assets/images/404.png"
          width={400}
        />
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <p>
          <span>This page was either moved or never existed. </span>
        </p>
        <p>
          <span>
            <Link to="/">Back Home</Link>
          </span>
        </p>
        <StaticImage
          alt="404 not found"
          backgroundColor="#D5E9F6"
          className="balloon"
          src="../assets/images/balloon.png"
          width={400}
        />
      </div>
    </NotFound>
  </Layout>
)

export default NotFoundPage
