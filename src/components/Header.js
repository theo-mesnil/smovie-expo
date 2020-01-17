import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation'

import { Icon } from './Icon'
import { TouchableOpacity } from './TouchableOpacity'

export function Header() {
  const navigation = useContext(NavigationContext)

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack(null)}
      padding="lg"
      position="absolute"
      top="xxl"
      zIndex={1}
    >
      <Icon color="dark900" name="arrow-left" size={30} />
    </TouchableOpacity>
  )
}
