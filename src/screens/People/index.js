import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ImageBackground } from 'react-native'

import { GradientBackground } from '../../components/GradientBackground'
import { AllScreenLayout } from '../../layouts'
import { Centered, Header, Informations, Modal, Text } from '../../components'
import { getPeopleDetail } from '../../api/people'
import { getImageUrl } from '../../constants/image'
import { convertToFullDate } from '../../utils/formatTime'

export const People = () => {
  const aspectRatioCover = 16 / 18
  const route = useRoute()
  const [peopleDetail, setPeopleDetail] = useState()
  const [biographyModalVisible, setBiographyModalVisible] = useState(false)

  useEffect(() => {
    const peopleId = route.params.id
    getPeopleDetail(setPeopleDetail, peopleId)
  }, [route.params.id])

  return (
    <>
      <AllScreenLayout>
        <Header />
        {peopleDetail && (
          <>
            <ImageBackground
              opacity={0.8}
              source={{ uri: getImageUrl(peopleDetail.profile_path) }}
              style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
            >
              <GradientBackground />
              <Centered>
                <Text fontSize="h0" lineHeight={55} textAlign="center" weight="black">
                  {route.params.name}
                </Text>
                <Informations title={peopleDetail.known_for_department}>
                  <Text>
                    {peopleDetail.place_of_birth && `Born in ${peopleDetail.place_of_birth} `}
                    {peopleDetail.birthday && `on ${convertToFullDate(peopleDetail.birthday)}`}
                  </Text>
                </Informations>
              </Centered>
            </ImageBackground>
            <Centered>
              {peopleDetail.biography.length > 0 && (
                <Informations title="Biography">
                  <Text numberOfLines={3} onPress={() => setBiographyModalVisible(true)}>
                    {peopleDetail.biography.replace('\n\n', '\n')}
                  </Text>
                </Informations>
              )}
            </Centered>
          </>
        )}
      </AllScreenLayout>
      <Modal closeModal={() => setBiographyModalVisible(false)} isVisible={biographyModalVisible}>
        {peopleDetail && <Text>{peopleDetail.biography}</Text>}
      </Modal>
    </>
  )
}
