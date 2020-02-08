import React from 'react'

import * as S from './Button.styled'

export function Button({ children, variant = 'primary500', variantSize = 'md', ...rest }) {
  return (
    <S.Button variant={variant} variantSize={variantSize} {...rest}>
      <S.Content variantSize={variantSize}>{children}</S.Content>
    </S.Button>
  )
}
