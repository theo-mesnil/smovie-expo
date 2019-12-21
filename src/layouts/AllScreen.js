import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import * as S from './AllScreen.styled'

export const AllScreenLayout = ({ children }) => (
  <S.Layout>
    <StatusBar translucent />
    <ScrollView>{children}</ScrollView>
  </S.Layout>
)
