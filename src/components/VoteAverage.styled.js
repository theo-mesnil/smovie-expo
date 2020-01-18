import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Text } from './Text'

export const VoteAverage = styled.View`
  flex-direction: row;
  align-items: center;
  ${space};
`

export const Vote = styled(Text)`
  margin-left: 8;
`
