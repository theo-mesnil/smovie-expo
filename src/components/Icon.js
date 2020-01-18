import React from 'react'

import * as S from './Icon.styled.js'

export const Icon = ({ color, name, size, ...rest }) => (
  <S.Icon color={color} name={name} size={size} {...rest} />
)
