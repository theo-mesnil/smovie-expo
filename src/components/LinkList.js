/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Box } from './Box'
import { Text, TextLink } from './Text'
import { TouchableOpacity } from './TouchableOpacity'

export function LinkList({ list, onPress }) {
  return (
    <Box flexDirection="row" flexWrap="wrap" maxWidth="90%">
      {list.map((item, key) => {
        const { id, name } = item

        return (
          <Box
            as={TouchableOpacity}
            flexDirection="row"
            key={`linlListItem_${name}_${key}`}
            onPress={() => onPress(id, name)}
          >
            <TextLink>{`${name}`}</TextLink>
            {key + 1 < list.length && <Text>, </Text>}
          </Box>
        )
      })}
    </Box>
  )
}
