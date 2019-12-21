import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { useTheme } from '../contexts/theme'

export function GradientBackground({ colors, style }) {
  const theme = useTheme()

  return (
    <LinearGradient
      colors={colors || ['transparent', theme.colors.light900]}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        ...style
      }}
    />
  )
}
