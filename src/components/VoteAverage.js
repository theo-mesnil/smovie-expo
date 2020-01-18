import React from 'react'

import { Icon } from './Icon'
import * as S from './VoteAverage.styled'

export function VoteAverage({ vote, weight = 'black', ...rest }) {
  function getVoteAverageIcon(vote) {
    if (vote < 2) {
      return 'cloud-lightning'
    } else if (vote < 5) {
      return 'cloud-drizzle'
    } else if (vote < 7) {
      return 'cloud'
    } else if (vote < 9) {
      return 'sun'
    } else {
      return 'heart'
    }
  }

  function getVoteNumber(vote) {
    const voteNumber = vote * 10
    return voteNumber.toString().split('.')[0]
  }

  return (
    <S.VoteAverage {...rest}>
      <Icon
        color={vote >= 9 ? 'danger500' : 'primary500'}
        name={getVoteAverageIcon(vote)}
        size={20}
      />
      <S.Vote weight={weight}>{getVoteNumber(vote)}%</S.Vote>
    </S.VoteAverage>
  )
}
