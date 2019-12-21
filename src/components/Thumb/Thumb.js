import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'

import { useTheme } from '../../contexts/theme'

import * as S from './Thumb.styled'

export const Thumb = ({ backgroundUri, aspectRatio = 2 / 3, title, subtitle, onPress }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ImageBackground
        imageStyle={{ borderRadius: theme.radii.md }}
        source={{ uri: backgroundUri }}
        style={{ aspectRatio }}
      />
      {title && (
        <S.TitleWrapper>
          <S.Title numberOfLines={2}>{title}</S.Title>
        </S.TitleWrapper>
      )}
      {subtitle && (
        <S.SubtitleWrapper>
          <S.Subtitle numberOfLines={1}>{subtitle}</S.Subtitle>
        </S.SubtitleWrapper>
      )}
    </TouchableOpacity>
  )
}
