import React from 'react'
import styled from 'styled-components/native'
import { flexbox, layout, position, space } from 'styled-system'

const StyledTouchableOpacity = styled.TouchableOpacity(space, flexbox, layout, position)

export function Touchable({ onPress, ...rest }) {
  return <StyledTouchableOpacity activeOpacity={onPress ? 0.7 : 1} onPress={onPress} {...rest} />
}

Touchable.Background = undefined
