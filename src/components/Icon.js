import React from 'react'

import * as S from './Icon.styled.js'

export function Icon({ color, name, size, ...rest }) {
  return <S.Icon color={color} name={name} size={size} {...rest} />
}
