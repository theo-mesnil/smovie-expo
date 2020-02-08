import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box } from './Box'
import { Button } from './Button'

export function Genres({ genres }) {
  const navigation = useNavigation()

  return (
    <Box flex="1" flexDirection="row" flexWrap="wrap">
      {genres.map(genre => (
        <Button
          color="light900"
          key={`genre_${genre.name}`}
          marginRight="xxs"
          marginTop="xxs"
          onPress={() => navigation.push('Genre', { id: genre.id, name: genre.name })}
          variant="light500"
          variantSize="sm"
        >
          {genre.name}
        </Button>
      ))}
    </Box>
  )
}
