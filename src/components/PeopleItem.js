import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getImageUrl } from '../constants/image'

import { Box } from './Box'
import { Thumb } from './Thumb'

export const PeopleItem = memo(function PeopleItem({
  item,
  numberOfColumns,
  onLongPress,
  subtitle,
  withIcon,
  withTitle
}) {
  const navigation = useNavigation()

  return (
    <Box flex={1 / numberOfColumns} px="xxs" py="xxs">
      <Thumb
        backgroundUri={getImageUrl(item.profile_path)}
        icon={withIcon && 'user'}
        onLongPress={onLongPress}
        onPress={() => navigation.push('People', { id: item.id, name: item.name })}
        subtitle={subtitle}
        title={withTitle && item.name}
      />
    </Box>
  )
})
