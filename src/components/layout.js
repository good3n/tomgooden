import React, { useState } from 'react'
import GlobalStyle from '../assets/styles/global'
import lightTheme from '../assets/styles/lightTheme'
import darkTheme from '../assets/styles/darkTheme'
import { ThemeProvider } from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'

// ! come back and fix this

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('isDarkMode')
    const [isDarkMode, setDarkMode] = useState(stored === 'true' ? true : false)
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <main className="container">{children}</main>
        <Footer />
      </ThemeProvider>
    )
  } else {
    const [isDarkMode, setDarkMode] = useState(false)
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <main className="container">{children}</main>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Layout
