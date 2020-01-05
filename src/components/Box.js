import React from 'react'
import styled from 'styled-components/native'
import { flexbox, layout, position, space } from 'styled-system'

const BoxStyled = styled.View(flexbox, layout, position, space)

export function Box(props) {
  return <BoxStyled {...props} />
}
