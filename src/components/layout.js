import React, { useState } from 'react'
import GlobalStyle from '../assets/styles/global'
import lightTheme from '../assets/styles/lightTheme'
import darkTheme from '../assets/styles/darkTheme'
import { ThemeProvider } from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  let stored = ''
  typeof window
    ? (stored = localStorage.getItem('isDarkMode'))
    : (stored = true)
  const [isDarkMode, setDarkMode] = useState(stored === 'true' ? true : false)
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <main className="container">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
