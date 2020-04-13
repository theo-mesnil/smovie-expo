import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon } from './Icon'
import { Box } from './Box'
import { Touchable } from './Touchable'

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
      <Touchable mr="sm" onPress={() => navigation.goBack(null)}>
        <Box>
          <Icon color="dark900" name={iconName} size={30} />
        </Box>
      </Touchable>
      {children}
    </Box>
  )
}
