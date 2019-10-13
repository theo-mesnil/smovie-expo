import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import { registerRootComponent } from 'expo'
import { ThemeProvider } from 'styled-components/native'

import { createTheme } from './themes'
import * as S from './index.styled'

function App() {
  const [theme, setTheme] = useState()

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <S.App>
        <Text>Hello!</Text>
        <Button onPress={() => setTheme()} title="light" />
        <Button onPress={() => setTheme('dark')} title="dark" />
      </S.App>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
