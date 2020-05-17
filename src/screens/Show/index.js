import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import i18n from 'i18n-js'

import {
  Button,
  ContentHeader,
  Genres,
  Informations,
  Listing,
  Padding,
  Section,
  Text
} from '../../components'
import { useGetShowDetail } from '../../api/show'
import { useConvertToFullDate } from '../../utils/formatTime'
import { CoverLayout } from '../../layouts/CoverLayout'
import { isTablet, windowWidth } from '../../constants/screen'

import * as S from './styled'
import { CastingItem } from './CastingItem'
import { RecommendationItem } from './RecommendationItem'

export function Show() {
  const route = useRoute()
  const navigation = useNavigation()
  const [showDetail, setShowDetail] = useState()
  const [showCredits, setShowCredits] = useState()
  const [showRecommendations, setShowRecommendations] = useState()
  const aspectRatioCover = isTablet ? 16 / 5 : 16 / 9
  const getShowDetail = useGetShowDetail()
  const convertToFullDate = useConvertToFullDate()

  useEffect(() => {
    const showId = route.params.id
    getShowDetail(setShowDetail, showId)
    getShowDetail(setShowCredits, showId, '/credits')
    getShowDetail(setShowRecommendations, showId, '/recommendations')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.id])

  return (
    <CoverLayout
      aspectRatioCover={aspectRatioCover}
      backdropCover={showDetail?.backdrop_path}
      headerTitle={showDetail?.name}
    >
      {showDetail && (
        <>
          <ContentHeader
            genre={showDetail.genres?.[0]?.name}
            minutes={showDetail.episode_run_time?.[0]}
            paddingTop={windowWidth / aspectRatioCover - 110}
            poster={showDetail.poster_path}
            title={showDetail.name}
            voteAverage={showDetail.vote_average}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.Seasons>
              {showDetail.seasons?.map(season => (
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
          <Padding pb={0} pt={0}>
            {showDetail.overview && <Text>{showDetail.overview}</Text>}
            <Informations title={i18n.t('seasonsandepisodes')}>
              <Text>
                {`${showDetail.number_of_seasons} ${i18n.t('season')}${
                  showDetail.number_of_seasons > 1 ? 's' : ''
                } ${i18n.t('and')} ${showDetail.number_of_episodes} ${i18n.t('episode')}${
                  showDetail.number_of_episodes > 1 ? 's' : ''
                }`}
              </Text>
            </Informations>
            {showDetail?.original_name !== showDetail.title && (
              <Informations title={i18n.t('originaltitle')}>
                <Text>{showDetail.original_name}</Text>
              </Informations>
            )}
            {showDetail.first_air_date && (
              <Informations title={i18n.t('firstbroadcast')}>
                <Text numberOfLines={1}>{convertToFullDate(showDetail.first_air_date)}</Text>
              </Informations>
            )}
          </Padding>
          {showDetail.genres && (
            <Informations mb="lg" paddingOnTitle title={i18n.t('genres')}>
              <Genres genres={showDetail.genres} />
            </Informations>
          )}
          {showCredits && showCredits?.cast?.length > 0 && (
            <Section title={i18n.t('casting')}>
              <Listing
                data={showCredits.cast}
                keyExtractor={item => `${item.id}_${Math.random()}`}
                renderItem={props => <CastingItem {...props} />}
              />
            </Section>
          )}
          {showRecommendations && showRecommendations?.results?.length > 0 && (
            <Section
              backgroundColor="ahead"
              mb={0}
              pb="xl"
              pt="sm"
              title={i18n.t('recommendations')}
            >
              <Listing
                data={showRecommendations.results}
                keyExtractor={item => `${item.id}_${Math.random()}`}
                renderItem={props => <RecommendationItem {...props} />}
              />
            </Section>
          )}
        </>
      )}
    </CoverLayout>
  )
}
