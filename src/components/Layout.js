import React from 'react'
import 'normalize.css'
import PropTypes from 'prop-types'
import GlobalStyle from '../assets/styles/global'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
