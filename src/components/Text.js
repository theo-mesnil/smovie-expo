/* eslint-disable react/no-multi-comp */
import React from 'react'

import * as S from './Text.styled'

export function Text({ children, weight = 'regular', ...rest }) {
  return (
    <S.Text weight={weight} {...rest}>
      {children}
    </S.Text>
  )
}

export function TextLink(props) {
  return <Text color="primary500" {...props} />
}
