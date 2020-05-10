import React, { useCallback } from 'react'

import { useTheme } from '../contexts/theme'

import * as S from './TextInput.styled'
import { Button } from './Button'
import { Icon } from './Icon'

export function TextInput({ handleClean, iconName, ...rest }) {
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
      {iconName && <Icon color="primary500" mr="xs" name={iconName} size={15} />}
      <S.TextInput
        keyboardAppearance={keyboardAppearance()}
        placeholderTextColor={theme.values.colors.dark100}
        selectionColor={theme.values.colors.primary500}
        {...rest}
      />
      {handleClean && (
        <Button onPress={() => handleClean()} variantSize="sm">
          <Icon color="white" name="x-circle" size={15} />
        </Button>
      )}
    </S.Wrapper>
  )
}
