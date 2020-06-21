import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { Box } from './Box'
import { Button } from './Button'

export function Genres({ genres, type = 'movie' }) {
  const navigation = useNavigation()

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box flexDirection="row" paddingLeft="lg" paddingRight="lg">
        {genres.map(genre => (
          <Button
            key={`genre_${genre.name}`}
            marginRight="xxs"
            marginTop="xxs"
            onPress={() => navigation.push('Genre', { id: genre.id, name: genre.name, type })}
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
