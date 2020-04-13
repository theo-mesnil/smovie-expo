import React from 'react'
import { StatusBar } from 'react-native'

import * as S from './AllScreen.styled'

export function AllScreenLayout({ children }) {
  return (
    <S.Layout>
      <StatusBar translucent />
      {children}
    </S.Layout>
  )
}
