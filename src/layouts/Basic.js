import React from 'react'
import { ScrollView } from 'react-native'

import * as S from './Basic.styled'

export const BasicLayout = ({ children }) => (
  <S.Layout>
    <ScrollView>{children}</ScrollView>
  </S.Layout>
)
