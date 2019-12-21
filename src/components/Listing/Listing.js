import React from 'react'
import { FlatList as FlatListNative } from 'react-native'

import { useTheme } from '../../contexts/theme'

import * as S from './Listing.styled'

export const Listing = props => {
  const theme = useTheme()

  return (
    <FlatListNative
      contentContainerStyle={{
        paddingLeft: theme.space.number.xl,
        paddingRight: theme.space.number.xl
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  )
}

export const ListingItem = S.Item
