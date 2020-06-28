import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../../constants/image'
import { Icon, ListingItem, Thumb, UserIcon } from '../../components'

export const PeopleItem = memo(function PeopleItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0}>
      <Thumb
        aspectRatio={2 / 3}
        backgroundUri={!!item.profile_path && getImageUrl(item.profile_path)}
        iconNoContent={<Icon icon={UserIcon} opacity="0.6" size="40" />}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        title={item.name}
      />
    </ListingItem>
  )
})
