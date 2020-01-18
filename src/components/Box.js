import React from 'react'
import styled from 'styled-components/native'
import { color, flexbox, layout, position, space } from 'styled-system'

const BoxStyled = styled.View(flexbox, layout, position, space, color)

export function Box(props) {
  return <BoxStyled {...props} />
}
