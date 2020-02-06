import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ImageBackground } from 'react-native'

import { GradientBackground } from '../../components/GradientBackground'
import { AllScreenLayout } from '../../layouts'
import { Centered, Header, Text } from '../../components'
import { getPeopleDetail } from '../../api/people'
import { getImageUrl } from '../../constants/image'

export const People = () => {
  const aspectRatioCover = 16 / 13
  const route = useRoute()
  const [peopleDetail, setPeopleDetail] = useState()

  useEffect(() => {
    const peopleId = route.params.id
    getPeopleDetail(setPeopleDetail, peopleId)
  }, [route.params.id])

  return (
    <AllScreenLayout>
      <Header />
      {peopleDetail && (
        <ImageBackground
          opacity={0.8}
          source={{ uri: getImageUrl(peopleDetail.profile_path) }}
          style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
        >
          <GradientBackground />
          <Centered>
            <Text fontSize="h0" textAlign="center" weight="bold">
              {route.params.name}
            </Text>
            <Text fontSize="h2" textAlign="center">
              {peopleDetail.known_for_department}
            </Text>
          </Centered>
        </ImageBackground>
      )}
    </AllScreenLayout>
  )
}
