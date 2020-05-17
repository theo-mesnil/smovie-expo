import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { locale } from 'expo-localization'
import i18n from 'i18n-js'

import { ThemeProvider as ThemeProviderContext } from './contexts/theme'
import { LanguageProvider as LanguageProviderContext } from './contexts/language'
import { createTheme } from './themes'
import { useAsyncStorage } from './utils/storage'
import { Navigation } from './navigations'
import * as S from './index.styled'
import { localeFR } from './locales/fr'
import { localeEN } from './locales/en'

function App() {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useAsyncStorage('theme', themeName || 'dark')
  const [language, setLanguage] = useAsyncStorage('language', language || getLanguage())
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

  function getLanguage() {
    if (locale.startsWith('fr')) {
      return 'fr'
    } else {
      return 'en'
    }
  }

  i18n.translations = {
    en: localeEN,
    fr: localeFR
  }
  i18n.locale = language
  i18n.fallbacks = true

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
          <LanguageProviderContext value={{ locale: language, setLocale: setLanguage }}>
            <ThemeProviderContext
              value={{ values: theme, name: themeName, setThemeName: setThemeName }}
            >
              {appLoaded && <Navigation />}
            </ThemeProviderContext>
          </LanguageProviderContext>
        </S.App>
      </AppearanceProvider>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
