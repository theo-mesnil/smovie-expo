import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

import { AllScreenLayout } from '../../layouts'
import {
  Box,
  Button,
  ContentHeader,
  ContentHeaderLoader,
  Genres,
  Header,
  Informations,
  Listing,
  ListingItem,
  ListingLoader,
  Padding,
  Section,
  Text,
  Thumb
} from '../../components'
import { getShowDetail } from '../../api/show'
import { convertToFullDate } from '../../utils/formatTime'
import { getImageUrl } from '../../constants/image'

import * as S from './styled'

export const Show = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [showDetail, setShowDetail] = useState()
  const [showCredits, setShowCredits] = useState()
  const [showRecommendations, setShowRecommendations] = useState()

  useEffect(() => {
    const showId = route.params.id
    getShowDetail(setShowDetail, showId)
    getShowDetail(setShowCredits, showId, '/credits')
    getShowDetail(setShowRecommendations, showId, '/recommendations')
  }, [route.params.id])

  return (
    <AllScreenLayout>
      <Header />
      {showDetail ? (
        <Box>
          <ContentHeader
            cover={showDetail.backdrop_path}
            genre={!!showDetail.genres && !!showDetail.genres[0] && showDetail.genres[0].name}
            minutes={showDetail.episode_run_time[0]}
            poster={showDetail.poster_path}
            title={showDetail.name}
            voteAverage={showDetail.vote_average}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.Seasons>
              {showDetail.seasons.map(season => (
                <Button
                  key={season.name}
                  mr="xxs"
                  mt="xxs"
                  onPress={() => {
                    navigation.push('Season', {
                      id: showDetail.id,
                      seasonNumber: season.season_number,
                      seasonName: season.name
                    })
                  }}
                >
                  {season.name}
                </Button>
              ))}
            </S.Seasons>
          </ScrollView>
          <Padding pt={0}>
            <Text>{showDetail.overview}</Text>
            <Informations title="Seasons and Episodes">
              <Text>
                {`${showDetail.number_of_seasons} season${
                  showDetail.number_of_seasons > 1 ? 's' : ''
                } and ${showDetail.number_of_episodes} episode${
                  showDetail.number_of_episodes > 1 ? 's' : ''
                }`}
              </Text>
            </Informations>
            {showDetail.first_air_date && (
              <Informations title="First broadcast">
                <Text numberOfLines={1}>{convertToFullDate(showDetail.first_air_date)}</Text>
              </Informations>
            )}
            {showDetail.genres && (
              <Informations title="Genres">
                <Genres genres={showDetail.genres} />
              </Informations>
            )}
          </Padding>
          <Section title="Casting">
            {showCredits ? (
              <Listing
                data={showCredits.cast}
                keyExtractor={item => `${item.id}_${Math.random()}`}
                renderItem={({ index, item }) => (
                  <ListingItem isFirst={index === 0}>
                    <Thumb
                      aspectRatio={2 / 3}
                      backgroundUri={getImageUrl(item.profile_path)}
                      onPress={
                        () => navigation.push('People', { id: item.id, name: item.name })
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                      title={item.name}
                    />
                  </ListingItem>
                )}
              />
            ) : (
              <ListingLoader />
            )}
          </Section>
          <Section backgroundColor="ahead" mb={0} pb="xl" pt="sm" title="Recommendations">
            {showRecommendations ? (
              <Listing
                data={showRecommendations.results}
                keyExtractor={item => `${item.id}_${Math.random()}`}
                renderItem={({ index, item }) => (
                  <ListingItem
                    isFirst={index === 0}
                    numberOfColumns={1.5}
                    numberOfColumnsTablet={2.5}
                  >
                    <Thumb
                      aspectRatio={16 / 9}
                      backgroundUri={getImageUrl(item.backdrop_path)}
                      onPress={() => {
                        navigation.push('Show', { id: item.id })
                      }}
                      title={item.name}
                    />
                  </ListingItem>
                )}
              />
            ) : (
              <ListingLoader numberOfColumns={1} numberOfColumnsTablet={3} />
            )}
          </Section>
        </Box>
      ) : (
        <ContentHeaderLoader />
      )}
    </AllScreenLayout>
  )
}
