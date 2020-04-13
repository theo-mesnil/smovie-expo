/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Box } from './Box'
import { Text, TextLink } from './Text'
import { Touchable } from './Touchable'

export function LinkList({ list, onPress }) {
  return (
    <Box flexDirection="row" flexWrap="wrap" maxWidth="90%">
      {list.map((item, key) => {
        const { id, name } = item

        return (
          <Box as={Touchable} key={`linlListItem_${name}_${key}`} onPress={() => onPress(id, name)}>
            <Box flexDirection="row">
              <TextLink>{`${name}`}</TextLink>
              {key + 1 < list.length && <Text>, </Text>}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
