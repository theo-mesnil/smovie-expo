import React from 'react'

import * as S from './Button.styled'
import { Touchable } from './Touchable'
import { Icon } from './Icon'

export function Button({
  children,
  iconName,
  onPress,
  variant = 'primary',
  variantSize = 'md',
  ...rest
}) {
  return (
    <Touchable onPress={onPress}>
      <S.Button variant={variant} variantSize={variantSize} {...rest}>
        {iconName && (
          <Icon color={variant === 'primary' ? '#fff' : undefined} name={iconName} size={20} />
        )}
        <S.Content
          style={{ marginLeft: iconName ? 10 : undefined }}
          variant={variant}
          variantSize={variantSize}
        >
          {children}
        </S.Content>
      </S.Button>
    </Touchable>
  )
}
