import React from 'react'

import { Icon } from './Icon'
import * as S from './Section.styled'

export function Section({ children, onPress, title, ...rest }) {
  return (
    <S.Section {...rest}>
      {title && (
        <S.Title>
          {onPress ? (
            <S.TitleWithLink onPress={onPress}>
              <S.TitleContent numberOfLines={1}>{title}</S.TitleContent>
              <S.Icon>
                <Icon color="dark900" name="arrow-right" size={24} />
              </S.Icon>
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
