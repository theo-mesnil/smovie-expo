/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Box } from './Box'
import { Text, TextLink } from './Text'

export function LinkList({ list, onPress }) {
  return (
    <Box flexDirection="row" flexWrap="wrap" maxWidth="90%">
      {list.map((item, key) => {
        const { id, name } = item

        return (
          <Box flexDirection="row" key={`linlListItem_${name}_${key}`}>
            <TextLink onPress={() => onPress(id, name)}>{`${name}`}</TextLink>
            {key + 1 < list.length && <Text>, </Text>}
          </Box>
        )
      })}
    </Box>
  )
}
