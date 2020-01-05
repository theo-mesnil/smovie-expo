import React from 'react'

import { BasicLayout } from '../../layouts/Basic'
import { Centered } from '../../components/Centered'
import { Text } from '../../components/Text'
import { TitleScreen } from '../../components/TitleScreen'

export const Genre = ({ navigation }) => (
  <BasicLayout>
    <Centered>
      <TitleScreen>{navigation.getParam('name')}</TitleScreen>
      <Text>Coming soon 🙃</Text>
    </Centered>
  </BasicLayout>
)
