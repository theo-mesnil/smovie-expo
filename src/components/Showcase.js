import React from 'react'
import { Animated, ImageBackground } from 'react-native'

import { getImageUrl } from '../constants/image'

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
        <Animated.View style={styleGradient}>
          <ImageBackground
            source={{
              uri: getImageUrl(backdropImage, 1280)
            }}
            style={{
              aspectRatio: aspectRatioCover
            }}
          />
        </Animated.View>
        <GradientBackground />
      </Animated.View>
    </Box>
  )
}
