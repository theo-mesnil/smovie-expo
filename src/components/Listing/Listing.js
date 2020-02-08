import React from 'react'
import { FlatList as FlatListNative } from 'react-native'

import { useTheme } from '../../contexts/theme'

import * as S from './Listing.styled'

export function Listing(props) {
  const theme = useTheme()

  return (
    <FlatListNative
      contentContainerStyle={{
        paddingHorizontal: theme.values.space.xl
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  )
}

export const ListingItem = S.Item
