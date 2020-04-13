import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'

import { BasicLayout } from '../../layouts'
import { Centered, Text, TitleScreen } from '../../components'

export function Genre() {
  const route = useRoute()

  return (
    <BasicLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Centered>
          <TitleScreen>{route.params.name}</TitleScreen>
          <Text>Coming soon 🙃</Text>
        </Centered>
      </ScrollView>
    </BasicLayout>
  )
}
