/* eslint-disable react/no-multi-comp */
import React from 'react'

import * as S from './Text.styled'

export const Text = ({ children, weight = 'regular', ...rest }) => (
  <S.Text weight={weight} {...rest}>
    {children}
  </S.Text>
)

export const TextLink = props => <Text color="primary500" {...props} />
