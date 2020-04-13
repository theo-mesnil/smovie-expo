import React from 'react'

import * as S from './RadioGroup.styled'
import { Touchable } from './Touchable.android'

export function Radio({ disabled, onPress, selected }) {
  return (
    <Touchable onPress={onPress}>
      <S.Radio
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled }}
        selected={selected}
      >
        {selected && <S.Checked />}
      </S.Radio>
    </Touchable>
  )
}
