import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon } from './Icon'
import { Box } from './Box'
import { TouchableOpacity } from './TouchableOpacity'

export function Header({ children, iconName = 'arrow-left' }) {
  const navigation = useNavigation()

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      paddingBottom="md"
      paddingLeft="xl"
      paddingRight="xl"
      paddingTop={50}
      position="absolute"
      top="0"
      width={1}
      zIndex={1}
    >
      <TouchableOpacity mr="sm" onPress={() => navigation.goBack(null)}>
        <Icon color="dark900" name={iconName} size={30} />
      </TouchableOpacity>
      {children}
    </Box>
  )
}
