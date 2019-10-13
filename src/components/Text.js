import PropTypes from 'prop-types'
import React from 'react'

import * as S from './Text.styled'

export const Text = ({ children, weight = 'regular', ...rest }) => (
  <S.Text weight={weight} {...rest}>
    {children}
  </S.Text>
)

Text.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.oneOf(['regular', 'bold', 'black'])
}
