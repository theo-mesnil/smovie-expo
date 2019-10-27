import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'

import { createTheme } from './themes'
import Navigation from './navigations'
import * as S from './index.styled'

function App() {
  const [theme, setTheme] = useState('dark')
  const [appLoaded, setAppLoaded] = useState(false)

  useEffect(() => {
    async function loadApp() {
      await Font.loadAsync({
        regular: require('./assets/fonts/lato-regular.ttf'),
        bold: require('./assets/fonts/lato-bold.ttf'),
        black: require('./assets/fonts/lato-black.ttf')
      })

      setAppLoaded(true)
    }

    loadApp()
  }, [])

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <S.App>{appLoaded && <Navigation />}</S.App>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
