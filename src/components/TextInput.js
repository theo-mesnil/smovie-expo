import React, { useCallback } from 'react'

import { useTheme } from '../contexts/theme'

import * as S from './TextInput.styled'
import { Button } from './Button'
import { CrossIcon, Icon } from './Icons'

export function TextInput({ handleClean, icon, ...rest }) {
  const theme = useTheme()

  const keyboardAppearance = useCallback(() => {
    if (theme.name === 'dark') {
      return 'dark'
    } else if (theme.name === 'light') {
      return 'light'
    } else {
      return undefined
    }
  }, [theme.name])

  return (
    <S.Wrapper>
      {icon && <Icon color="primary500" icon={icon} mr="xs" size="15" />}
      <S.TextInput
        keyboardAppearance={keyboardAppearance()}
        placeholderTextColor={theme.values.colors.dark100}
        selectionColor={theme.values.colors.primary500}
        {...rest}
      />
      {handleClean && (
        <Button onPress={() => handleClean()} variantSize="sm">
          <Icon color="#fff" icon={CrossIcon} size="15" />
        </Button>
      )}
    </S.Wrapper>
  )
}
