/* eslint-disable react/no-multi-comp */
import React from 'react'
import { ImageBackground } from 'react-native'

import { getImageUrl } from '../constants/image'
import { convertMinToHours } from '../utils/formatTime'
import { convertToDate } from '../utils/formatTime'
import { isTablet } from '../constants/screen'

import { Box } from './Box'
import { GradientBackground } from './GradientBackground'
import { ShapeLoader } from './Loader.styled'
import { Text } from './Text'
import { Thumb } from './Thumb'
import { VoteAverage } from './VoteAverage'
import * as S from './ContentHeader.styled'

export function ContentHeader({
  aspectRatioCover = isTablet ? 16 / 6 : 16 / 13,
  cover,
  genre,
  minutes,
  poster,
  title,
  voteAverage,
  date,
  imageStyle,
  colorGradient
}) {
  return (
    <ImageBackground
      imageStyle={imageStyle}
      opacity={0.8}
      source={{ uri: getImageUrl(cover, isTablet ? 1280 : 780) }}
      style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
    >
      <GradientBackground colors={colorGradient} />
      <S.ContentHeader>
        {!!poster && (
          <Box marginRight="lg" width={120}>
            <Thumb backgroundUri={getImageUrl(poster)} />
          </Box>
        )}
        <Box flex={1} justifyContent="center">
          <Text fontSize="h1" lineHeight={25} numberOfLines={3} weight="bold">
            {title}
          </Text>
          {date && <Text numberOfLines={2}>{convertToDate(date)}</Text>}
          {genre && (
            <S.Genre>
              {genre}
              {minutes && (
                <Text fontSize="body3" weight="bold">
                  {' '}
                  ({convertMinToHours(minutes)})
                </Text>
              )}
            </S.Genre>
          )}
          {!!voteAverage && <VoteAverage mt="md" vote={voteAverage} />}
        </Box>
      </S.ContentHeader>
    </ImageBackground>
  )
}

export function ContentHeaderLoader({ aspectRatioCover = 16 / 10 }) {
  return (
    <ShapeLoader style={{ aspectRatio: aspectRatioCover }}>
      <GradientBackground zIndex={1} />
    </ShapeLoader>
  )
}
