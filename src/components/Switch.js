import React from 'react'
import { Switch as SwitchNative } from 'react-native'

import { useTheme } from '../contexts/theme'

export const Switch = props => {
  const theme = useTheme()

  return (
    <SwitchNative
      ios_backgroundColor={theme.colors.light500}
      thumbColor={theme.switch.thumb}
      trackColor={{ false: theme.colors.light500, true: theme.colors.primary500 }}
      {...props}
    />
  )
}
