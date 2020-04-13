import React from 'react'

import * as S from './Button.styled'
import { Touchable } from './Touchable'

export function Button({ children, onPress, variant = 'primary500', variantSize = 'md', ...rest }) {
  return (
    <Touchable onPress={onPress}>
      <S.Button variant={variant} variantSize={variantSize} {...rest}>
        <S.Content variantSize={variantSize}>{children}</S.Content>
      </S.Button>
    </Touchable>
  )
}
