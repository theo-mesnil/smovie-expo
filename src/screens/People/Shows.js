import React, { memo } from 'react'
import { getYear } from 'date-fns'

import { Box } from '../../components'

import { Filmography } from './Filmography'

export const Shows = memo(function Shows({ shows }) {
  return shows
    .filter(item => !!item.first_air_date)
    .sort((a, b) => getYear(new Date(b.first_air_date)) - getYear(new Date(a.first_air_date)))
    .map((item, index, items) => {
      const date = getYear(new Date(item.first_air_date))
      const dateBefore = index > 0 ? getYear(new Date(items[index - 1].first_air_date)) : undefined

      return (
        <Box key={item.id}>
          {date !== dateBefore && <Filmography.Header date={date} index={index} />}
          <Filmography date={date} id={item.id} title={item.name} />
        </Box>
      )
    })
})
