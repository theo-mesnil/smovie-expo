import React from 'react'

import { MovieItem, PeopleItem, ShowItem } from '../../components'

export function SearchItem({ item, numberOfColumns }) {
  if (item.media_type === 'movie') {
    return <MovieItem item={item} numberOfColumns={numberOfColumns} subtitle="Movie" withTitle />
  }
  if (item.media_type === 'tv') {
    return <ShowItem item={item} numberOfColumns={numberOfColumns} subtitle="Tv show" withTitle />
  }
  if (item.media_type === 'person') {
    return <PeopleItem item={item} numberOfColumns={numberOfColumns} subtitle="People" withTitle />
  }

  return undefined
}
