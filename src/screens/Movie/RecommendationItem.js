import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ListingItem, Thumb } from '../../components'
import { getImageUrl } from '../../constants/image'

export const RecommendationItem = memo(function RecommendationItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0} numberOfColumns={1.5} numberOfColumnsTablet={2.5}>
      <Thumb
        aspectRatio={16 / 9}
        backgroundUri={getImageUrl(item.backdrop_path)}
        onPress={() => {
          navigation.push('Movie', { id: item.id })
        }}
        title={item.title}
      />
    </ListingItem>
  )
})
