import React from 'react'

import * as S from './RadioGroup.styled'

export function Radio({ disabled, onPress, selected }) {
  return (
    <S.Radio
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      onPress={onPress}
      selected={selected}
    >
      {selected && <S.Checked />}
    </S.Radio>
  )
}
