import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { Box } from './Box'
import { Button } from './Button'

export function Genres({ genres }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box flexDirection="row" paddingLeft="lg" paddingRight="lg">
        {genres.map(genre => (
          <Button
            key={`genre_${genre.name}`}
            marginRight="xxs"
            marginTop="xxs"
            // TODO : create Genre screen
            // onPress={() => navigation.push('Genre', { id: genre.id, name: genre.name })}
            variant="tertiary"
            variantSize="sm"
          >
            {genre.name}
          </Button>
        ))}
      </Box>
    </ScrollView>
  )
}
