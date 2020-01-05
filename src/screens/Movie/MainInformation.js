import React from 'react'

import { Box } from '../../components/Box'
import { Text } from '../../components/Text'
import { Thumb } from '../../components/Thumb'
import { VoteAverage } from '../../components/VoteAverage'
import { getImageUrl } from '../../constants/image'
import { convertMinToHours } from '../../utils/formatTime'

import * as S from './MainInformation.styled'

export function MainInformation({ genre, minutes, poster, title, voteAverage }) {
  return (
    <S.MainInformation>
      <Box marginRight={20} width={80}>
        <Thumb backgroundUri={getImageUrl(poster)} />
      </Box>
      <Box justifyContent="center">
        <Text fontSize={20} lineHeight={20} numberOfLines={2} weight="bold" width="90%">
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
        {voteAverage && <VoteAverage vote={voteAverage} />}
      </Box>
    </S.MainInformation>
  )
}
