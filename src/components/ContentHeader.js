/* eslint-disable react/no-multi-comp */
import React from 'react'

import { getImageUrl } from '../constants/image'
import { convertMinToHours } from '../utils/formatTime'
import { convertToDate } from '../utils/formatTime'

import { Box } from './Box'
import { Text } from './Text'
import { Thumb } from './Thumb'
import { VoteAverage } from './VoteAverage'
import * as S from './ContentHeader.styled'

export function ContentHeader({ date, genre, minutes, poster, title, voteAverage, ...rest }) {
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
