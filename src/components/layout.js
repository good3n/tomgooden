import React, { useState } from 'react'
import GlobalStyle from '../assets/styles/global'
import Helmet from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === `light` ? `dark` : `light`)
    console.log(theme)
  }

  return (
    <>
      <GlobalStyle />
      <Helmet
        bodyAttributes={{
          class: `theme ${theme}`,
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
