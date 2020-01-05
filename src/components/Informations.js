import React from 'react'

import { Box } from './Box'
import { Text } from './Text'

export function Informations({ children, title }) {
  return (
    <Box marginTop="lg">
      <Text weight="black">{title}</Text>
      <Text numberOfLines={1}>{children}</Text>
    </Box>
  )
}
