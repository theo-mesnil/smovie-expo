import React from 'react'

import { Box } from './Box'
import { Text } from './Text'

export function Informations({ children, paddingOnTitle, title, ...rest }) {
  return (
    <Box marginTop="lg" {...rest}>
      <Text fontSize="h4" marginBottom={2} ml={paddingOnTitle && 'xl'} weight="black">
        {title}
      </Text>
      {children}
    </Box>
  )
}
