import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon, ListingItem, Thumb, TvIcon } from '../../components'
import { getImageUrl } from '../../constants/image'

export const RecommendationItem = memo(function RecommendationItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0} numberOfColumns={1.5} numberOfColumnsTablet={2.5}>
      <Thumb
        aspectRatio={16 / 9}
        backgroundUri={!!item.backdrop_path && getImageUrl(item.backdrop_path)}
        iconNoContent={<Icon icon={TvIcon} opacity="0.6" size="40" />}
        onPress={() => {
          navigation.push('Show', { id: item.id })
        }}
        title={item.name}
      />
    </ListingItem>
  )
})
