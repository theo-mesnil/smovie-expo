import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

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
  Modal,
  Padding,
  Section,
  Text,
  Thumb
} from '../../components'
import { getShowDetail } from '../../api/show'
import { convertToFullDate } from '../../utils/formatTime'
import { getImageUrl } from '../../constants/image'

import * as S from './styled'

export const Show = ({ navigation }) => {
  const [showDetail, setShowDetail] = useState()
  const [showCredits, setShowCredits] = useState()
  const [showRecommendations, setShowRecommendations] = useState()
  const [seasonVisible, setSeasonVisible] = useState(false)

  useEffect(() => {
    const showId = navigation.getParam('showID')
    // const showId = '81356'
    getShowDetail(setShowDetail, showId)
    getShowDetail(setShowCredits, showId, '/credits')
    getShowDetail(setShowRecommendations, showId, '/recommendations')
  }, [navigation])

  return (
    <>
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
            <Padding pb={0}>
              <Text>{showDetail.overview}</Text>
            </Padding>
            <Informations paddingOnTitle title="Seasons">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <S.Seasons>
                  {showDetail.seasons.map(season => (
                    <Button
                      key={season.name}
                      mr="xxs"
                      mt="xxs"
                      onPress={() => setSeasonVisible(true)}
                    >
                      {season.name}
                    </Button>
                  ))}
                </S.Seasons>
              </ScrollView>
            </Informations>
            <Padding pt={0}>
              <Informations title="First broadcast">
                <Text numberOfLines={1}>{convertToFullDate(showDetail.first_air_date)}</Text>
              </Informations>
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
                          () => navigation.navigate('People', { id: item.id, name: item.name })
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
            <Section title="Recommendations">
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
                          navigation.push('Show', { showID: item.id })
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
      <Modal isVisible={seasonVisible} setIsVisible={setSeasonVisible}>
        <Text>Soon 🙈</Text>
      </Modal>
    </>
  )
}
