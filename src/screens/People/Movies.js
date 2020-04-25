import React, { memo } from 'react'
import { getYear } from 'date-fns'

import { Box } from '../../components'

import { Filmography } from './Filmography'

export const Movies = memo(function Movies({ movies }) {
  return movies
    .filter(item => !!item.release_date)
    .sort((a, b) => getYear(new Date(b.release_date)) - getYear(new Date(a.release_date)))
    .map((item, index, items) => {
      const date = getYear(new Date(item.release_date))
      const dateBefore = index > 0 ? getYear(new Date(items[index - 1].release_date)) : undefined

      return (
        <Box key={item.id}>
          {date !== dateBefore && <Filmography.Header date={date} index={index} />}
          <Filmography date={date} id={item.id} isMovie title={item.title} />
        </Box>
      )
    })
})
