import React from 'react'

import { Box } from './Box'
import { Text } from './Text'

export function Informations({ children, paddingOnTitle, title }) {
  return (
    <Box marginTop="lg">
      <Text marginBottom={2} ml={paddingOnTitle && 'xl'} weight="black">
        {title}
      </Text>
      {children}
    </Box>
  )
}
