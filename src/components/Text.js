import React from 'react'

import * as S from './Text.styled'

export const Text = ({ children, weight = 'regular', ...rest }) => (
  <S.Text weight={weight} {...rest}>
    {children}
  </S.Text>
)
