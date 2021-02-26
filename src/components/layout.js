import React, { useState } from 'react'
import GlobalStyle from '../assets/styles/global'
import Helmet from 'react-helmet'
import { useSpring, animated } from 'react-spring'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const transitions = useSpring({ opacity: 1, from: { opacity: 0 } })

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
      <animated.main style={transitions}>{children}</animated.main>
      <Footer />
    </>
  )
}

export default Layout
