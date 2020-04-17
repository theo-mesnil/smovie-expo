import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ImageBackground, ScrollView } from 'react-native'
import { getYear } from 'date-fns'

import { GradientBackground } from '../../components/GradientBackground'
import { AllScreenLayout } from '../../layouts'
import {
  Box,
  Header,
  Informations,
  Listing,
  ListingItem,
  ListingLoader,
  Modal,
  Padding,
  Section,
  Text,
  Thumb
} from '../../components'
import { getPeopleDetail } from '../../api/people'
import { getImageUrl } from '../../constants/image'
import { convertToFullDate } from '../../utils/formatTime'
import { isTablet } from '../../constants/screen'

import { Filmography } from './Filmography'

export function People() {
  const aspectRatioCover = isTablet ? 16 / 9 : 16 / 18
  const route = useRoute()
  const navigation = useNavigation()
  const [peopleDetail, setPeopleDetail] = useState()
  const [peopleCredits, setPeopleCredits] = useState()
  const [peoplePopular, setPeoplePopular] = useState()
  const [biographyModalVisible, setBiographyModalVisible] = useState(false)

  useEffect(() => {
    const peopleId = route.params.id
    getPeopleDetail(setPeopleDetail, peopleId)
    getPeopleDetail(setPeopleCredits, peopleId, '/combined_credits')
  }, [route.params.id])

  useEffect(() => {
    setPeoplePopular(
      !!peopleDetail &&
        !!peopleCredits &&
        peopleCredits[peopleDetail.known_for_department === 'Acting' ? 'cast' : 'crew'].reduce(
          (previous, current) => {
            const object = previous.filter(
              object => object.original_title === current.original_title
            )
            if (object.length === 0) {
              if (previous.job && current.job) {
                previous.push({ ...current, job: `${previous.job}, ${current.job}` })
              } else {
                previous.push(current)
              }
            }
            return previous
          },
          []
        )
    )
  }, [peopleCredits, peopleDetail])

  return (
    <>
      <AllScreenLayout>
        <Header />
        {peopleDetail && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              opacity={0.8}
              source={{ uri: getImageUrl(peopleDetail.profile_path, isTablet ? 1280 : 780) }}
              style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
            >
              <GradientBackground style={{ top: undefined, bottom: 0, height: '30%' }} />
              <Text
                fontSize="h0"
                lineHeight={55}
                mb="xxl"
                paddingLeft="sm"
                paddingRight="sm"
                textAlign="center"
                weight="black"
              >
                {route.params.name}
              </Text>
            </ImageBackground>
            <Padding marginTop={-50}>
              <Informations title={peopleDetail.known_for_department}>
                <Text>
                  {peopleDetail.place_of_birth && `Born in ${peopleDetail.place_of_birth} `}
                  {peopleDetail.birthday && `on ${convertToFullDate(peopleDetail.birthday)}`}
                  {peopleDetail.deathday &&
                    `and die in ${convertToFullDate(peopleDetail.deathday)}`}
                </Text>
              </Informations>
              {peopleDetail.biography.length > 0 && (
                <Informations title="Biography">
                  <Text numberOfLines={3} onPress={() => setBiographyModalVisible(true)}>
                    {peopleDetail.biography.replace('\n\n', '\n')}
                  </Text>
                </Informations>
              )}
            </Padding>
            <Section title="Know for">
              {peoplePopular ? (
                <Listing
                  data={peoplePopular
                    .sort((a, b) => b.popularity.toFixed(2) - a.popularity.toFixed(2))
                    .slice(0, 20)}
                  keyExtractor={item => `${item.id}_${Math.random()}`}
                  renderItem={({ index, item }) => (
                    <ListingItem isFirst={index === 0}>
                      <Thumb
                        aspectRatio={2 / 3}
                        backgroundUri={getImageUrl(item.poster_path)}
                        onPress={
                          () =>
                            navigation.push(item.media_type === 'movie' ? 'Movie' : 'Show', {
                              id: item.id,
                              name: item.name
                            })
                          // eslint-disable-next-line react/jsx-curly-newline
                        }
                      />
                    </ListingItem>
                  )}
                />
              ) : (
                <ListingLoader />
              )}
            </Section>
            {peoplePopular && peoplePopular.filter(item => item.media_type === 'movie').length > 0 && (
              <Section title="Movie">
                <Padding pb={0} pt={0}>
                  <Box
                    backgroundColor="ahead"
                    borderRadius="md"
                    paddingLeft="sm"
                    paddingRight="sm"
                    paddingTop="sm"
                  >
                    {peoplePopular
                      .filter(item => item.media_type === 'movie')
                      .filter(item => !!item.release_date)
                      .sort(
                        (a, b) =>
                          getYear(new Date(b.release_date)) - getYear(new Date(a.release_date))
                      )
                      .map((item, index, items) => {
                        const date = getYear(new Date(item.release_date))

                        const dateBefore =
                          index > 0 ? getYear(new Date(items[index - 1].release_date)) : undefined

                        return (
                          <Box key={item.id}>
                            {date !== dateBefore && index > 0 && (
                              <Box backgroundColor="light100" height="1px" mb="sm" with={1} />
                            )}
                            <Filmography date={date} id={item.id} isMovie title={item.title} />
                          </Box>
                        )
                      })}
                  </Box>
                </Padding>
              </Section>
            )}
            {peoplePopular && peoplePopular.filter(item => item.media_type === 'tv').length > 0 && (
              <Section title="Show">
                <Padding pb={0} pt={0}>
                  <Box
                    backgroundColor="ahead"
                    borderRadius="md"
                    paddingLeft="sm"
                    paddingRight="sm"
                    paddingTop="sm"
                  >
                    {peoplePopular
                      .filter(item => item.media_type === 'tv')
                      .filter(item => !!item.first_air_date)
                      .sort(
                        (a, b) =>
                          getYear(new Date(b.first_air_date)) - getYear(new Date(a.first_air_date))
                      )
                      .map((item, index, items) => {
                        const date = getYear(new Date(item.first_air_date))
                        const dateBefore =
                          index > 0 ? getYear(new Date(items[index - 1].first_air_date)) : undefined

                        return (
                          <Box key={item.id}>
                            {date !== dateBefore && index > 0 && (
                              <Box backgroundColor="light100" height="1px" mb="sm" with={1} />
                            )}
                            <Filmography date={date} id={item.id} title={item.name} />
                          </Box>
                        )
                      })}
                  </Box>
                </Padding>
              </Section>
            )}
          </ScrollView>
        )}
      </AllScreenLayout>
      <Modal
        closeAction={() => setBiographyModalVisible(false)}
        isVisible={biographyModalVisible}
        withPadding
      >
        {peopleDetail && <Text>{peopleDetail.biography}</Text>}
      </Modal>
    </>
  )
}
