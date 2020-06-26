import React from 'react'

import * as S from './Button.styled'
import { Touchable } from './Touchable'
import { Icon } from './Icons'

export function Button({
  children,
  icon,
  onPress,
  variant = 'primary',
  variantSize = 'md',
  ...rest
}) {
  return (
    <Touchable onPress={onPress}>
      <S.Button variant={variant} variantSize={variantSize} {...rest}>
        {icon && <Icon color={variant === 'primary' ? '#fff' : undefined} icon={icon} size="20" />}
        <S.Content
          style={{ marginLeft: icon ? 10 : undefined }}
          variant={variant}
          variantSize={variantSize}
        >
          {children}
        </S.Content>
      </S.Button>
    </Touchable>
  )
}
