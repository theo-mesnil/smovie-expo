import React from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'

import { BasicLayout } from '../../layouts'
import { Centered, Text } from '../../components'

export function Genre() {
  const route = useRoute()

  return (
    <BasicLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Centered>
          <Text>{route.params.name}</Text>
          <Text>Coming soon 🙃</Text>
        </Centered>
      </ScrollView>
    </BasicLayout>
  )
}
