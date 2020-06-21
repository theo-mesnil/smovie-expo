import React from 'react'
import i18n from 'i18n-js'

import { MovieItem, PeopleItem, ShowItem } from '../../components'

export function SearchItem({ item, numberOfColumns }) {
  if (item.media_type === 'movie') {
    return (
      <MovieItem
        item={item}
        numberOfColumns={numberOfColumns}
        subtitle={i18n.t('movie')}
        withTitle
      />
    )
  }
  if (item.media_type === 'tv') {
    return (
      <ShowItem item={item} numberOfColumns={numberOfColumns} subtitle={i18n.t('show')} withTitle />
    )
  }
  if (item.media_type === 'person') {
    return (
      <PeopleItem
        item={item}
        numberOfColumns={numberOfColumns}
        subtitle={i18n.t('artist')}
        withTitle
      />
    )
  }

  return undefined
}
