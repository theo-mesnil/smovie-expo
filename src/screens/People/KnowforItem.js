import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon, ListingItem, MovieIcon, Thumb, TvIcon } from '../../components'
import { getImageUrl } from '../../constants/image'

export const KnowForItem = memo(function KnowForItem({ index, item }) {
  const navigation = useNavigation()

  return (
    <ListingItem isFirst={index === 0}>
      <Thumb
        aspectRatio={2 / 3}
        backgroundUri={!!item.poster_path && getImageUrl(item.poster_path)}
        iconNoContent={
          <Icon icon={item.media_type === 'movie' ? MovieIcon : TvIcon} opacity="0.6" size="40" />
        }
        onPress={
          () =>
            navigation.push(item.media_type === 'movie' ? 'Movie' : 'Show', {
              id: item.id,
              name: item.name
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </ListingItem>
  )
})
