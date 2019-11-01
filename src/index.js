import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { Platform, StatusBar } from 'react-native'

import { createTheme } from './themes'
import Navigation from './navigations'
import * as S from './index.styled'

function App() {
  const [themeName, setThemeName] = useState('dark')
  const [appLoaded, setAppLoaded] = useState(false)
  const theme = createTheme(themeName)

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
    <ThemeProvider theme={theme}>
      {Platform.OS === 'ios' && (
        <StatusBar animated barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />
      )}
      <S.App>{appLoaded && <Navigation screenProps={{ theme, themeName, setThemeName }} />}</S.App>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
