import React from 'react'
import styled from 'styled-components/native'
import { flexbox, layout, position, space } from 'styled-system'

const StyledTouchableOpacity = styled.TouchableOpacity(space, flexbox, layout, position)

export function TouchableOpacity(props) {
  return <StyledTouchableOpacity activeOpacity={0.7} {...props} />
}
