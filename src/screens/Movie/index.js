/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'

import { AllScreenLayout } from '../../layouts'
import { getMovieDetail } from '../../api/movie'
import { getImageUrl } from '../../constants/image'
import {
  Box,
  Genres,
  GradientBackground,
  Icon,
  Informations,
  LinkList,
  Listing,
  ListingItem,
  ListingLoader,
  Section,
  ShapeLoader,
  Text,
  Thumb,
  TouchableOpacity
} from '../../components'
import { convertToFullDate } from '../../utils/formatTime'
import { formatMoney } from '../../utils/formatMoney'

import { MainInformation } from './MainInformation'

export const Movie = ({ navigation }) => {
  const [movieDetail, setMovieDetail] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieRecommendations, setMovieRecommendations] = useState()
  const aspectRatioCover = 16 / 10

  useEffect(() => {
    const movieId = navigation.getParam('movieID')
    getMovieDetail(setMovieDetail, movieId)
    getMovieDetail(setMovieCredits, movieId, '/credits')
    getMovieDetail(setMovieRecommendations, movieId, '/recommendations')
  }, [navigation])

  const director = !!movieCredits && movieCredits.crew.filter(credit => credit.job === 'Director')
  const writers =
    !!movieCredits &&
    movieCredits.crew.filter(
      credit => credit.department === 'Writing' && director[0].name !== credit.name
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
          <ImageBackground
            opacity={0.8}
            source={{ uri: getImageUrl(movieDetail.backdrop_path) }}
            style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
          >
            <GradientBackground />
            <MainInformation
              date={movieDetail.release_date}
              genre={!!movieDetail.genres && !!movieDetail.genres[0] && movieDetail.genres[0].name}
              minutes={movieDetail.runtime}
              poster={movieDetail.poster_path}
              title={movieDetail.title}
              voteAverage={movieDetail.vote_average}
            />
          </ImageBackground>
          <Box paddingBottom="xl" paddingLeft="xl" paddingRight="xl" paddingTop="xl">
            <Text>{movieDetail.overview}</Text>
            <Informations title={movieDetail.status}>
              <Text numberOfLines={1}>{convertToFullDate(movieDetail.release_date)}</Text>
            </Informations>
            {director && (
              <Informations title="Director">
                <LinkList
                  list={director}
                  onPress={(id, name) => navigation.navigate('People', { id, name })}
                />
              </Informations>
            )}
            {writers && (
              <Informations title="Writers">
                <LinkList
                  list={writers}
                  onPress={(id, name) => navigation.navigate('People', { id, name })}
                />
              </Informations>
            )}
            {movieDetail.genres && (
              <Informations title="Genres">
                <Genres genres={movieDetail.genres} />
              </Informations>
            )}
            {!!movieDetail.revenue && !!movieDetail.revenue !== 0 && (
              <Informations title="Revenue">
                <Text numberOfLines={1}>{formatMoney(movieDetail.revenue)}</Text>
              </Informations>
            )}
          </Box>
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
            {movieRecommendations ? (
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
                        navigation.push('Movie', { movieID: item.id })
                      }}
                      title={item.title}
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
        <ShapeLoader style={{ aspectRatio: aspectRatioCover }}>
          <GradientBackground zIndex={1} />
        </ShapeLoader>
      )}
    </AllScreenLayout>
  )
}
