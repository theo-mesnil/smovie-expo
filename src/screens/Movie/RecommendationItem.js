import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon, ListingItem, MovieIcon, Thumb } from '../../components'
import { getImageUrl } from '../../constants/image'

export const RecommendationItem = memo(function RecommendationItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0} numberOfColumns={1.5} numberOfColumnsTablet={2.5}>
      <Thumb
        aspectRatio={16 / 9}
        backgroundUri={!!item.backdrop_path && getImageUrl(item.backdrop_path)}
        iconNoContent={<Icon icon={MovieIcon} opacity="0.6" size="40" />}
        onPress={() => {
          navigation.push('Movie', { id: item.id })
        }}
        title={item.title}
      />
    </ListingItem>
  )
})
