import React from 'react'
import { View } from 'react-native'

import { LineGradient, ShapeLoader } from '../Loader.styled'
import * as S from '../Thumb/Thumb.styled'
import { useTheme } from '../../contexts/theme'

export const ThumbLoader = ({ aspectRatio = 2 / 3, withoutTitle }) => {
  const theme = useTheme()

  return (
    <View>
      <ShapeLoader style={{ aspectRatio, borderRadius: theme.radii.md }} />
      {!withoutTitle && (
        <S.TitleWrapper>
          <LineGradient />
        </S.TitleWrapper>
      )}
    </View>
  )
}
