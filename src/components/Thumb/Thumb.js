import React from 'react'
import { ImageBackground, View } from 'react-native'

import { useTheme } from '../../contexts/theme'
import { Touchable } from '../../components/Touchable'
import { Box } from '../../components/Box'

import * as S from './Thumb.styled'

export function Thumb({
  backgroundUri,
  aspectRatio = 3 / 4,
  title,
  subtitle,
  onPress,
  iconNoContent,
  ...rest
}) {
  const theme = useTheme()

  return (
    <Touchable onPress={onPress} {...rest}>
      <Box borderRadius="md" overflow="hidden">
        <ImageBackground
          imageStyle={{
            borderRadius: theme.values.radii.md,
            backgroundColor: theme.values.colors.light500
          }}
          source={{ uri: backgroundUri || 'empty' }}
          style={{ aspectRatio }}
        >
          {!backgroundUri && iconNoContent && (
            <View alignItems="center" height="100%" justifyContent="center">
              {iconNoContent}
            </View>
          )}
        </ImageBackground>
        {!!title && (
          <S.TitleWrapper>
            <S.Title numberOfLines={2}>{title}</S.Title>
          </S.TitleWrapper>
        )}
        {!!subtitle && (
          <S.SubtitleWrapper>
            <S.Subtitle numberOfLines={1}>{subtitle}</S.Subtitle>
          </S.SubtitleWrapper>
        )}
      </Box>
    </Touchable>
  )
}
