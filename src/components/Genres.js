import React, { useContext } from 'react'
// TODO add hook when V5 is ready
import { NavigationContext } from 'react-navigation'

import { Box } from './Box'
import { Button } from './Button'

export function Genres({ genres }) {
  const navigation = useContext(NavigationContext)

  return (
    <Box flexDirection="row">
      {genres.map(genre => (
        <Button
          color="light900"
          key={`genre_${genre.name}`}
          marginRight="xxs"
          marginTop="xxs"
          onPress={() => navigation.navigate('People', { id: genre.id, name: genre.name })}
          variant="light500"
          variantSize="sm"
        >
          {genre.name}
        </Button>
      ))}
    </Box>
  )
}
