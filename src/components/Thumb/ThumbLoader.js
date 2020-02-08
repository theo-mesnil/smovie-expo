import React from 'react'
import { View } from 'react-native'

import { LineGradient, ShapeLoader } from '../Loader.styled'
import * as S from '../Thumb/Thumb.styled'
import { useTheme } from '../../contexts/theme'

export function ThumbLoader({ aspectRatio = 3 / 4, withoutTitle }) {
  const theme = useTheme()

  return (
    <View>
      <ShapeLoader style={{ aspectRatio, borderRadius: theme.values.radii.md }} />
      {!withoutTitle && (
        <S.TitleWrapper>
          <LineGradient />
        </S.TitleWrapper>
      )}
    </View>
  )
}
