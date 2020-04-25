import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../../constants/image'
import { ListingItem, Thumb } from '../../components'

export const PeopleItem = memo(function PeopleItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0}>
      <Thumb
        aspectRatio={2 / 3}
        backgroundUri={getImageUrl(item.profile_path)}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        title={item.name}
      />
    </ListingItem>
  )
})
