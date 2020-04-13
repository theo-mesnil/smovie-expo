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

export function Touchable({ onPress, ...rest }) {
  const theme = useTheme()

  return (
    <StyledTouchableNativeFeedback
      background={
        onPress ? TouchableNativeFeedback.Ripple(theme.values.colors.light900, false) : undefined
      }
      delayPressIn={0}
      onPress={onPress}
      useForeground={!!onPress}
      {...rest}
    />
  )
}
