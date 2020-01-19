import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import { flexbox, layout, position, space } from 'styled-system'

import { useTheme } from '../contexts/theme'

const StyledGradientBackground = styled(LinearGradient)(flexbox, layout, position, space)

export function GradientBackground({ colors, style }) {
  const theme = useTheme()

  return (
    <StyledGradientBackground
      colors={colors || ['transparent', theme.values.background.behind]}
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
