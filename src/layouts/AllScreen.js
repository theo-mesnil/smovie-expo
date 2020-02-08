import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import * as S from './AllScreen.styled'

export function AllScreenLayout({ children }) {
  return (
    <S.Layout>
      <StatusBar translucent />
      <ScrollView>{children}</ScrollView>
    </S.Layout>
  )
}
