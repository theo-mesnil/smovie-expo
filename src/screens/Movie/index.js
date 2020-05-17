/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import i18n from 'i18n-js'

import { useGetMovieDetail } from '../../api/movie'
import {
  ContentHeader,
  Genres,
  Informations,
  LinkList,
  Listing,
  Padding,
  Section,
  Text
} from '../../components'
import { useConvertToFullDate } from '../../utils/formatTime'
import { formatMoney } from '../../utils/formatMoney'
import { CoverLayout } from '../../layouts/CoverLayout'
import { isTablet, windowWidth } from '../../constants/screen'

import { CastingItem } from './CastingItem'
import { RecommendationItem } from './RecommendationItem'

export function Movie() {
  const route = useRoute()
  const navigation = useNavigation()
  const [movieDetail, setMovieDetail] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieRecommendations, setMovieRecommendations] = useState()
  const aspectRatioCover = isTablet ? 16 / 5 : 16 / 9
  const getMovieDetail = useGetMovieDetail()
  const convertToFullDate = useConvertToFullDate()

  useEffect(() => {
    const movieId = route.params.id
    getMovieDetail(setMovieDetail, movieId)
    getMovieDetail(setMovieCredits, movieId, '/credits')
    getMovieDetail(setMovieRecommendations, movieId, '/recommendations')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.id])

  const director = !!movieCredits && movieCredits.crew.filter(credit => credit.job === 'Director')
  const writers =
    !!movieCredits &&
    movieCredits.crew.filter(
      credit => credit.department === 'Writing' && !!director[0] && director[0].name !== credit.name
    )

  return (
    <CoverLayout
      aspectRatioCover={aspectRatioCover}
      backdropCover={movieDetail?.backdrop_path}
      headerTitle={movieDetail?.title}
    >
      {movieDetail && (
        <>
          <ContentHeader
            genre={movieDetail?.genres?.[0]?.name}
            minutes={movieDetail.runtime}
            paddingTop={windowWidth / aspectRatioCover - 110}
            poster={movieDetail.poster_path}
            title={movieDetail.title}
            voteAverage={movieDetail.vote_average}
          />
          <Padding pb={0}>
            {!!movieDetail.overview && <Text>{movieDetail.overview}</Text>}
            {movieDetail?.original_title !== movieDetail.title && (
              <Informations title={i18n.t('originaltitle')}>
                <Text>{movieDetail.original_title}</Text>
              </Informations>
            )}
            {movieDetail.release_date && (
              <Informations title={movieDetail?.status}>
                <Text numberOfLines={1}>{convertToFullDate(movieDetail.release_date)}</Text>
              </Informations>
            )}
            {director?.length > 0 && (
              <Informations title={i18n.t('director')}>
                <LinkList
                  list={director}
                  onPress={(id, name) => navigation.push('People', { id, name })}
                />
              </Informations>
            )}
            {writers?.length > 0 && (
              <Informations title={i18n.t('writers')}>
                <LinkList
                  list={writers}
                  onPress={(id, name) => navigation.push('People', { id, name })}
                />
              </Informations>
            )}
            {!!movieDetail.revenue && !!movieDetail.revenue !== 0 && (
              <Informations title={i18n.t('revenue')}>
                <Text numberOfLines={1}>{formatMoney(movieDetail.revenue)}</Text>
              </Informations>
            )}
          </Padding>
          {movieDetail.genres && (
            <Informations mb="lg" paddingOnTitle title={i18n.t('genres')}>
              <Genres genres={movieDetail.genres} />
            </Informations>
          )}
          {movieCredits && movieCredits?.cast?.length > 0 && (
            <Section title={i18n.t('casting')}>
              <Listing
                data={movieCredits.cast}
                keyExtractor={item => `${item.id}_${Math.random()}`}
                renderItem={props => <CastingItem {...props} />}
              />
            </Section>
          )}
          {movieRecommendations && movieRecommendations.results.length > 0 && (
            <Section
              backgroundColor="ahead"
              mb={0}
              pb="xl"
              pt="sm"
              title={i18n.t('recommendations')}
            >
              <Listing
                data={movieRecommendations.results}
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
