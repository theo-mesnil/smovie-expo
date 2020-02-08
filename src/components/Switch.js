import React from 'react'
import { Switch as SwitchNative } from 'react-native'

import { useTheme } from '../contexts/theme'

export function Switch(props) {
  const theme = useTheme()

  return (
    <SwitchNative
      ios_backgroundColor={theme.values.colors.light500}
      thumbColor={theme.values.switch.thumb}
      trackColor={{ false: theme.values.colors.light500, true: theme.values.colors.primary500 }}
      {...props}
    />
  )
}
