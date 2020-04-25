import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { ListingItem, Thumb } from '../../components'
import { getImageUrl } from '../../constants/image'

export const CastingItem = memo(function CastingItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0}>
      <Thumb
        aspectRatio={2 / 3}
        backgroundUri={getImageUrl(item.profile_path)}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        subtitle={item.character}
        title={item.name}
      />
    </ListingItem>
  )
})
