import PropTypes from 'prop-types'
import React from 'react'

import * as S from './Icon.styled.js'

export const Icon = ({ color, name, size }) => <S.Icon color={color} name={name} size={size} />

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
}
