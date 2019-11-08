import React, { useContext } from 'react'
import { View } from 'react-native'

import { LineGradient, ShapeLoader } from '../Loader.styled'
import { ThemeContext } from '../../utils/context'
import * as S from '../Thumb/Thumb.styled'

export const ThumbLoader = ({ aspectRatio = 16 / 9 }) => {
  const theme = useContext(ThemeContext)

  return (
    <View>
      <ShapeLoader style={{ aspectRatio, borderRadius: theme.radii.md }} />
      <S.TitleWrapper>
        <LineGradient />
      </S.TitleWrapper>
    </View>
  )
}
