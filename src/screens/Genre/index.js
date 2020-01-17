import React from 'react'

import { BasicLayout } from '../../layouts'
import { Centered, Text, TitleScreen } from '../../components'

export const Genre = ({ navigation }) => (
  <BasicLayout>
    <Centered>
      <TitleScreen>{navigation.getParam('name')}</TitleScreen>
      <Text>Coming soon 🙃</Text>
    </Centered>
  </BasicLayout>
)
