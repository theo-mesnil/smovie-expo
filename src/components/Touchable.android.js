import React from 'react'
import styled from 'styled-components/native'
import { TouchableNativeFeedback } from 'react-native'
import { flexbox, layout, position, space } from 'styled-system'

import { useTheme } from '../contexts/theme'

const StyledTouchableNativeFeedback = styled.TouchableNativeFeedback(
  space,
  flexbox,
  layout,
  position
)

export function Touchable(props) {
  const theme = useTheme()

  return (
    <StyledTouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(theme.values.colors.light900, false)}
      delayPressIn={0}
      useForeground
      {...props}
    />
  )
}
