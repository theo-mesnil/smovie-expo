import React from 'react'

import { CloudDrizzleIcon, CloudIcon, CloudLightningIcon, HeartIcon, Icon, SunIcon } from './Icons'
import * as S from './VoteAverage.styled'

export function VoteAverage({ vote, weight = 'black', ...rest }) {
  function getVoteAverageIcon(vote) {
    if (vote < 2) {
      return CloudLightningIcon
    } else if (vote < 5) {
      return CloudDrizzleIcon
    } else if (vote < 7) {
      return CloudIcon
    } else if (vote < 9) {
      return SunIcon
    } else {
      return HeartIcon
    }
  }

  function getVoteNumber(vote) {
    const voteNumber = vote.toString().split('.')[0]
    const voteSubNumber = vote.toString().split('.')[1]
    return voteSubNumber ? `${voteNumber}.${voteSubNumber.substring(0, 1)}` : voteNumber
  }

  return (
    <S.VoteAverage {...rest}>
      <Icon
        color={vote >= 9 ? 'danger500' : 'primary500'}
        icon={getVoteAverageIcon(vote)}
        size="20"
      />
      <S.Vote weight={weight}>{getVoteNumber(vote)}</S.Vote>
    </S.VoteAverage>
  )
}
