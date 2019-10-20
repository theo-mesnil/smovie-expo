import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'
import { View } from 'react-native'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'

import { Button } from './components/Button'
import { createTheme } from './themes'
import { Text } from './components/Text'
import * as S from './index.styled'

function App() {
  const [theme, setTheme] = useState()
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
      <S.App>
        {appLoaded && (
          <>
            <Text weight="black">Hello!</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={() => setTheme()}>Light</Button>
              <Button onPress={() => setTheme('dark')} variant="secondary">
                Dark
              </Button>
            </View>
          </>
        )}
      </S.App>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
