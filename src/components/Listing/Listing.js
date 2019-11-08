import React, { useContext } from 'react'
import { FlatList as FlatListNative } from 'react-native'

import { ThemeContext } from '../../utils/context'

import * as S from './Listing.styled'

export const Listing = props => {
  const theme = useContext(ThemeContext)

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
