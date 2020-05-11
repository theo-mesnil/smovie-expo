import React from 'react'
import { Animated, ImageBackground } from 'react-native'

import { getImageUrl } from '../constants/image'
import { isTablet } from '../constants/screen'

import { Box } from './Box'
import { GradientBackground } from './GradientBackground'

export function Showcase({ aspectRatioCover, backdropImage, styleCover, styleGradient }) {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Animated.View aspectRatio={aspectRatioCover} style={styleCover}>
        <Animated.View style={{ ...styleGradient, marginTop: -1 }}>
          {backdropImage && (
            <ImageBackground
              source={{
                uri: getImageUrl(backdropImage, isTablet ? 1280 : 780)
              }}
              style={{
                aspectRatio: aspectRatioCover
              }}
            />
          )}
          {!backdropImage && (
            <Box
              backgroundColor="ahead"
              style={{
                aspectRatio: aspectRatioCover
              }}
            />
          )}
        </Animated.View>
        <GradientBackground />
      </Animated.View>
    </Box>
  )
}
