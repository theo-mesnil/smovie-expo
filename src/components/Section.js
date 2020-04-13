import React from 'react'

import { Icon } from './Icon'
import * as S from './Section.styled'
import { Touchable } from './Touchable'

export function Section({ children, onPress, title, ...rest }) {
  return (
    <S.Section {...rest}>
      {title && (
        <S.Title>
          {onPress ? (
            <S.TitleWithLink>
              <S.TitleContent numberOfLines={1}>{title}</S.TitleContent>
              <Touchable onPress={onPress}>
                <S.Icon>
                  <Icon color="dark900" name="arrow-right" size={24} />
                </S.Icon>
              </Touchable>
            </S.TitleWithLink>
          ) : (
            <S.TitleContent numberOfLines={1}>{title}</S.TitleContent>
          )}
        </S.Title>
      )}
      {children}
    </S.Section>
  )
}
