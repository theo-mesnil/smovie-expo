import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box, Icon, Text, TextLink } from '../../components'

export function Filmography({ date, id, isMovie, title }) {
  const navigation = useNavigation()

  return (
    <Box alignItems="center" flexDirection="row" flexWrap="nowrap" paddingBottom="md" w={1}>
      <Text width={45}>{date}</Text>
      <Icon color="light100" name="chevron-right" size={15} />
      <TextLink
        flex={1}
        ml="xs"
        numberOfLines={1}
        onPress={
          () =>
            navigation.push(isMovie ? 'Movie' : 'Show', {
              id: id,
              name: title
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
      >
        {title}
      </TextLink>
    </Box>
  )
}
