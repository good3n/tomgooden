import React, { useState, useEffect } from 'react'
import GlobalStyle from '../assets/styles/global'
import lightTheme from '../assets/styles/lightTheme'
import darkTheme from '../assets/styles/darkTheme'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './useTheme';
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
