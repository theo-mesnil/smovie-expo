/* eslint-disable react/no-multi-comp */
import React from 'react'
import { ImageBackground } from 'react-native'

import { getImageUrl } from '../constants/image'
import { convertMinToHours } from '../utils/formatTime'
import { convertToDate } from '../utils/formatTime'
import { isTablet } from '../constants/screen'

import { Box } from './Box'
import { Text } from './Text'
import { Thumb } from './Thumb'
import { VoteAverage } from './VoteAverage'
import * as S from './ContentHeader.styled'
import { GradientBackground } from './GradientBackground'

function Content({ date, genre, minutes, poster, title, voteAverage, ...rest }) {
  return (
    <S.ContentHeader {...rest}>
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
  )
}

export function ContentHeader({
  imageStyle,
  cover,
  aspectRatioCover = isTablet ? 16 / 6 : 16 / 13,
  colorGradient,
  ...rest
}) {
  if (cover) {
    return (
      <ImageBackground
        imageStyle={imageStyle}
        opacity={0.8}
        source={{ uri: getImageUrl(cover, isTablet ? 1280 : 780) }}
        style={{ aspectRatio: aspectRatioCover, justifyContent: 'flex-end' }}
      >
        <GradientBackground colors={colorGradient} />
        <Content {...rest} />
      </ImageBackground>
    )
  }

  return <Content {...rest} />
}
