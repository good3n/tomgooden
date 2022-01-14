import React from 'react'
import 'normalize.css'
import GlobalStyle from '../assets/styles/global'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  // delete this line
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
