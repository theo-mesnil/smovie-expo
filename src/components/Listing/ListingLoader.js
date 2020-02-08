import React from 'react'

import { ThumbLoader } from '../Thumb/ThumbLoader'

import { Listing, ListingItem } from './Listing'

export function ListingLoader({ aspectRatio = 2 / 3, withoutTitle, ...rest }) {
  return (
    <Listing
      data={['1', '2', '3', '4', '5', '6', '7']}
      keyExtractor={item => `${item}`}
      renderItem={({ index }) => (
        <ListingItem isFirst={index === 0} {...rest}>
          <ThumbLoader aspectRatio={aspectRatio} withoutTitle={withoutTitle} />
        </ListingItem>
      )}
    />
  )
}
