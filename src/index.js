import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import { ThemeProvider as ThemeProviderContext } from './contexts/theme'
import { createTheme } from './themes'
import { useAsyncStorage } from './utils/storage'
import { Navigation } from './navigations'
import * as S from './index.styled'

function App() {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useAsyncStorage('theme', themeName || 'dark')
  const [appLoaded, setAppLoaded] = useState(false)
  const theme = createTheme(themeName === 'native' ? colorScheme : themeName)

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

  function getStatusBarStyle(theme) {
    if (theme === 'dark') {
      return 'light-content'
    } else if (theme === 'native') {
      return colorScheme === 'dark' ? 'light-content' : 'dark-content'
    } else {
      return 'dark-content'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppearanceProvider>
        <StatusBar
          animated
          backgroundColor="transparent"
          barStyle={getStatusBarStyle(themeName)}
          translucent
        />
        <S.App>
          <ThemeProviderContext
            value={{ values: theme, name: themeName, setThemeName: setThemeName }}
          >
            {appLoaded && <Navigation />}
          </ThemeProviderContext>
        </S.App>
      </AppearanceProvider>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
