import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../../constants/image'
import { ListingItem, Thumb } from '../../components'

export const MovieItem = memo(function MovieItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
      <Thumb
        backgroundUri={getImageUrl(item.poster_path)}
        onPress={() => navigation.push('Movie', { id: item.id })}
      />
    </ListingItem>
  )
})
