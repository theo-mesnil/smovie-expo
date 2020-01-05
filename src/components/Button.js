import React from 'react'

import * as S from './Button.styled'

export const Button = ({ children, variant = 'primary', ...rest }) => (
  <S.Button variant={variant} {...rest}>
    <S.Content>{children}</S.Content>
  </S.Button>
)
