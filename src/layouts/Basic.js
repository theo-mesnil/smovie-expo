import React from 'react'
import { ScrollView } from 'react-native'

import * as S from './Basic.styled'

export function BasicLayout({ children }) {
  return (
    <S.Layout>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </S.Layout>
  )
}
