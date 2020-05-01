import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box, Thumb } from '../../components'
import { getImageUrl } from '../../constants/image'
import { isTablet } from '../../constants/screen'

const numberOfColumns = isTablet ? 6 : 3

export const MovieItem = memo(function MovieItem({ item, onLongPress }) {
  const navigation = useNavigation()

  return (
    <Box flex={1 / numberOfColumns} px="xxs" py="xxs">
      <Thumb
        backgroundUri={getImageUrl(item.poster_path)}
        onLongPress={onLongPress}
        onPress={() => {
          navigation.push('Movie', { id: item.id })
        }}
      />
    </Box>
  )
})
