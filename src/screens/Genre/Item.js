import React from 'react'

import { MovieItem, ShowItem } from '../../components'

export function Item({ type, ...rest }) {
  if (type === 'tv') {
    return <ShowItem {...rest} />
  }

  return <MovieItem {...rest} />
}
