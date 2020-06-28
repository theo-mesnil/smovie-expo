import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../../constants/image'
import { Icon, ListingItem, Thumb, TvIcon } from '../../components'

export const ShowItem = memo(function ShowItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
      <Thumb
        backgroundUri={!!item.poster_path && getImageUrl(item.poster_path)}
        iconNoContent={<Icon icon={TvIcon} opacity="0.6" size="40" />}
        onPress={() => navigation.push('Show', { id: item.id })}
      />
    </ListingItem>
  )
})
