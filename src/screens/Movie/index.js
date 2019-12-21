import React, { useEffect, useState } from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'

import { AllScreenLayout } from '../../layouts/AllScreen'
import { getMovieDetail } from '../../api/movie'
import { getImageUrl } from '../../constants/image'
import { ShapeLoader } from '../../components/Loader.styled'
import { Icon } from '../../components/Icon'
import { GradientBackground } from '../../components/GradientBackground'
import { Text } from '../../components/Text'

export const Movie = ({ navigation }) => {
  const [movieDetail, setMovieDetail] = useState()
  const aspectRatioCover = 16 / 13

  useEffect(() => {
    getMovieDetail(setMovieDetail, navigation.getParam('movieID'))
  }, [navigation])

  return (
    <AllScreenLayout>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={{ position: 'absolute', zIndex: 1, top: 30, padding: 20 }}
      >
        <Icon color="#FFF" name="arrow-left" size={30} />
      </TouchableOpacity>
      {movieDetail ? (
        <ImageBackground
          opacity={0.8}
          source={{ uri: getImageUrl(movieDetail.backdrop_path) }}
          style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
        >
          <GradientBackground />
          <View
            style={{
              alignItems: 'center',
              maxWidth: 600,
              paddingLeft: 50,
              paddingRight: 50,
              paddingBottom: 50
            }}
          >
            <Text numberOfLines={2} style={{ textAlign: 'center' }} weight="black">
              {movieDetail.title}
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <ShapeLoader style={{ aspectRatio: aspectRatioCover }}>
          <GradientBackground
            style={{
              zIndex: 1
            }}
          />
        </ShapeLoader>
      )}
    </AllScreenLayout>
  )
}
