import React from 'react'

import * as S from './Button.styled'

export const Button = ({ children, variant = 'primary', ...rest }) => (
  <S.Button activeOpacity={0.7} variant={variant} {...rest}>
    <S.Content>{children}</S.Content>
  </S.Button>
)
