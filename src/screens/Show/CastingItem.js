import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon, ListingItem, Thumb, UserIcon } from '../../components'
import { getImageUrl } from '../../constants/image'

export const CastingItem = memo(function CastingItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0}>
      <Thumb
        aspectRatio={2 / 3}
        backgroundUri={!!item.profile_path && getImageUrl(item.profile_path)}
        iconNoContent={<Icon icon={UserIcon} opacity="0.6" size="40" />}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        subtitle={item.character}
        title={item.name}
      />
    </ListingItem>
  )
})
