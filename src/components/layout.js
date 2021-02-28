import React, { useState, useEffect } from 'react'
import GlobalStyle from '../assets/styles/global'
import Helmet from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(getTheme())

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme)
  }

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(theme))
  }, [theme])

  function getTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }

  return (
    <>
      <GlobalStyle />
      <Helmet
        bodyAttributes={{
          class: `theme ${theme && `dark`}`,
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
