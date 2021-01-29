import React from 'react'
import GlobalStyle from '../assets/styles/global'
import themeLight from '../assets/styles/themeLight'
import themeDark from '../assets/styles/themeDark'
import { useSpring, animated } from 'react-spring'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './useTheme'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  const transitions = useSpring({ opacity: 1, from: { opacity: 0 } })
  const [theme, toggleTheme, componentMounted] = useTheme()
  const themeMode = theme === 'light' ? themeLight : themeDark

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <animated.main style={transitions}>{children}</animated.main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
