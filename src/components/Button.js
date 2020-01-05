import React from 'react'

import * as S from './Button.styled'

export const Button = ({ children, variant = 'primary500', variantSize = 'md', ...rest }) => (
  <S.Button variant={variant} variantSize={variantSize} {...rest}>
    <S.Content variantSize={variantSize}>{children}</S.Content>
  </S.Button>
)
