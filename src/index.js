import React from 'react'
import { Text } from 'react-native'
import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'

import { coreTheme } from './themes'
import * as S from './index.styled'

function App() {
  const theme = coreTheme

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Text>Hello!</Text>
      </S.App>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
