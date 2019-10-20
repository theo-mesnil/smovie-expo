import PropTypes from 'prop-types'
import React from 'react'

import * as S from './Button.styled'

export const Button = ({ children, variant = 'primary', ...rest }) => (
  <S.Button activeOpacity={0.9} variant={variant} {...rest}>
    <S.Content>{children}</S.Content>
  </S.Button>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary'])
}
