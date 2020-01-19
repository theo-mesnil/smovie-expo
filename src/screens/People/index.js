import React from 'react'
import { useRoute } from '@react-navigation/native'

import { BasicLayout } from '../../layouts'
import { Centered, Text, TitleScreen } from '../../components'

export const People = () => {
  const route = useRoute()
  return (
    <BasicLayout>
      <Centered>
        <TitleScreen>{route.params.name}</TitleScreen>
        <Text>Coming soon 🙃</Text>
      </Centered>
    </BasicLayout>
  )
}
