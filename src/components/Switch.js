import React, { useContext } from 'react'
import { Switch as SwitchNative } from 'react-native'

import { ThemeContext } from '../utils/context'

export const Switch = props => {
  const theme = useContext(ThemeContext)

  return (
    <SwitchNative
      ios_backgroundColor={theme.colors.light500}
      thumbColor={theme.switch.thumb}
      trackColor={{ false: theme.colors.light500, true: theme.colors.primary500 }}
      {...props}
    />
  )
}
