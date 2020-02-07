/* eslint-disable react/no-multi-comp */
import React from 'react'
import { ImageBackground } from 'react-native'

import { getImageUrl } from '../constants/image'
import { convertMinToHours } from '../utils/formatTime'

import { Box } from './Box'
import { GradientBackground } from './GradientBackground'
import { ShapeLoader } from './Loader.styled'
import { Text } from './Text'
import { Thumb } from './Thumb'
import { VoteAverage } from './VoteAverage'
import * as S from './ContentHeader.styled'

export function ContentHeader({
  aspectRatioCover = 16 / 10,
  cover,
  genre,
  minutes,
  poster,
  title,
  voteAverage
}) {
  return (
    <ImageBackground
      opacity={0.8}
      source={{ uri: getImageUrl(cover) }}
      style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
    >
      <GradientBackground />
      <S.ContentHeader>
        <Box marginRight={20} width={90}>
          <Thumb backgroundUri={getImageUrl(poster)} />
        </Box>
        <Box justifyContent="center">
          <Text fontSize="h1" lineHeight={25} numberOfLines={2} weight="bold">
            {title}
          </Text>
          {genre && (
            <S.Genre>
              {genre}
              {minutes && (
                <Text fontSize={13} weight="bold">
                  {' '}
                  ({convertMinToHours(minutes)})
                </Text>
              )}
            </S.Genre>
          )}
          {voteAverage && <VoteAverage mt="md" vote={voteAverage} />}
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
