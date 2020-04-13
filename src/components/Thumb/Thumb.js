import React from 'react'
import { ImageBackground } from 'react-native'

import { useTheme } from '../../contexts/theme'
import { Touchable } from '../../components/Touchable'
import { Box } from '../../components/Box'

import * as S from './Thumb.styled'

export function Thumb({ backgroundUri, aspectRatio = 3 / 4, title, subtitle, onPress, ...rest }) {
  const theme = useTheme()

  return (
    <Touchable onPress={onPress} {...rest}>
      <Box>
        <ImageBackground
          imageStyle={{
            borderRadius: theme.values.radii.md
          }}
          source={{ uri: backgroundUri }}
          style={{ aspectRatio, zIndex: -1 }}
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
      </Box>
    </Touchable>
  )
}
