/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { AllScreenLayout } from '../../layouts'
import { getMovieDetail } from '../../api/movie'
import { getImageUrl } from '../../constants/image'
import {
  Box,
  ContentHeader,
  ContentHeaderLoader,
  Genres,
  Icon,
  Informations,
  LinkList,
  Listing,
  ListingItem,
  ListingLoader,
  Padding,
  Section,
  Text,
  Thumb,
  TouchableOpacity
} from '../../components'
import { convertToFullDate } from '../../utils/formatTime'
import { formatMoney } from '../../utils/formatMoney'

export function Movie() {
  const route = useRoute()
  const navigation = useNavigation()
  const [movieDetail, setMovieDetail] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieRecommendations, setMovieRecommendations] = useState()

  useEffect(() => {
    const movieId = route.params.id
    getMovieDetail(setMovieDetail, movieId)
    getMovieDetail(setMovieCredits, movieId, '/credits')
    getMovieDetail(setMovieRecommendations, movieId, '/recommendations')
  }, [route.params.id])

  const director = !!movieCredits && movieCredits.crew.filter(credit => credit.job === 'Director')
  const writers =
    !!movieCredits &&
    movieCredits.crew.filter(
      credit => credit.department === 'Writing' && !!director[0] && director[0].name !== credit.name
    )

  return (
    <AllScreenLayout>
      <TouchableOpacity
        onPress={() => navigation.goBack(null)}
        padding="lg"
        position="absolute"
        top="xxl"
        zIndex={1}
      >
        <Icon color="dark900" name="arrow-left" size={30} />
      </TouchableOpacity>
      {movieDetail ? (
        <Box>
          <ContentHeader
            cover={movieDetail.backdrop_path}
            genre={!!movieDetail.genres && !!movieDetail.genres[0] && movieDetail.genres[0].name}
            minutes={movieDetail.runtime}
            poster={movieDetail.poster_path}
            title={movieDetail.title}
            voteAverage={movieDetail.vote_average}
          />
          <Padding pb={0}>
            <Text>{movieDetail.overview}</Text>
            {movieDetail.release_date && (
              <Informations title={movieDetail.status}>
                <Text numberOfLines={1}>{convertToFullDate(movieDetail.release_date)}</Text>
              </Informations>
            )}
            {director && (
              <Informations title="Director">
                <LinkList
                  list={director}
                  onPress={(id, name) => navigation.push('People', { id, name })}
                />
              </Informations>
            )}
            {writers.length > 0 && (
              <Informations title="Writers">
                <LinkList
                  list={writers}
                  onPress={(id, name) => navigation.push('People', { id, name })}
                />
              </Informations>
            )}
            {!!movieDetail.revenue && !!movieDetail.revenue !== 0 && (
              <Informations title="Revenue">
                <Text numberOfLines={1}>{formatMoney(movieDetail.revenue)}</Text>
              </Informations>
            )}
          </Padding>
          {movieDetail.genres && (
            <Informations mb="lg" paddingOnTitle title="Genres">
              <Genres genres={movieDetail.genres} />
            </Informations>
          )}
          <Section title="Casting">
            {movieCredits ? (
              <Listing
                data={movieCredits.cast}
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
          {movieRecommendations && movieRecommendations.results.length > 0 && (
            <Section backgroundColor="ahead" mb={0} pb="xl" pt="sm" title="Recommendations">
              <Listing
                data={movieRecommendations.results}
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
                        navigation.push('Movie', { id: item.id })
                      }}
                      title={item.title}
                    />
                  </ListingItem>
                )}
              />
            </Section>
          )}
        </Box>
      ) : (
        <ContentHeaderLoader />
      )}
    </AllScreenLayout>
  )
}
