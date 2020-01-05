import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'

import { AllScreenLayout } from '../../layouts/AllScreen'
import { getMovieDetail } from '../../api/movie'
import { getImageUrl } from '../../constants/image'
import { ShapeLoader } from '../../components/Loader.styled'
import { Box } from '../../components/Box'
import { Informations } from '../../components/Informations'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { TouchableOpacity } from '../../components/TouchableOpacity'
import { GradientBackground } from '../../components/GradientBackground'
import { convertToFullDate } from '../../utils/formatTime'

import { MainInformation } from './MainInformation'

export const Movie = ({ navigation }) => {
  const [movieDetail, setMovieDetail] = useState()
  const aspectRatioCover = 16 / 10

  useEffect(() => {
    getMovieDetail(setMovieDetail, navigation.getParam('movieID'))
  }, [navigation])

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
              {convertToFullDate(movieDetail.release_date)}
            </Informations>
            <Informations title="Director">Test 1</Informations>
            <Informations title="Genres">Test 1</Informations>
            <Informations title="Revenue">Test 1</Informations>
          </Box>
        </Box>
      ) : (
        <ShapeLoader style={{ aspectRatio: aspectRatioCover }}>
          <GradientBackground zIndex={1} />
        </ShapeLoader>
      )}
    </AllScreenLayout>
  )
}
