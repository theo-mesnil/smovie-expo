import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../constants/image'

import { Box } from './Box'
import { Thumb } from './Thumb'
import { Icon, UserIcon } from './Icons'

export const PeopleItem = memo(function PeopleItem({
  aspectRatio,
  item,
  numberOfColumns,
  onLongPress,
  subtitle,
  withTitle
}) {
  const navigation = useNavigation()

  return (
    <Box flex={1 / numberOfColumns} px="xxs" py="xxs">
      <Thumb
        aspectRatio={aspectRatio}
        backgroundUri={!!item.profile_path && getImageUrl(item.profile_path)}
        iconNoContent={<Icon icon={UserIcon} opacity="0.6" size="40" />}
        onLongPress={onLongPress}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        subtitle={subtitle}
        title={withTitle && item.name}
      />
    </Box>
  )
})
