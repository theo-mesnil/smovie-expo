import React from 'react'

import { ThumbLoader } from '../Thumb/ThumbLoader'

import { Listing, ListingItem } from './Listing'

export const ListingLoader = () => (
  <Listing
    data={['1', '2', '3', '4', '5', '6', '7']}
    keyExtractor={item => `${item}`}
    renderItem={({ index }) => (
      <ListingItem isFirst={index === 0}>
        <ThumbLoader />
      </ListingItem>
    )}
  />
)
