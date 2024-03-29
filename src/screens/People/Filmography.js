import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box, Text, TextLink } from '../../components'
import { ChevronRightIcon, Icon } from '../../components/Icons'

export function Filmography({ id, isMovie, title }) {
  const navigation = useNavigation()

  return (
    <Box alignItems="center" flexDirection="row" flexWrap="nowrap" paddingBottom="md" w={1}>
      <Icon icon={ChevronRightIcon} size="15" />
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

// eslint-disable-next-line react/no-multi-comp
function Header({ date, index }) {
  return (
    <>
      {index > 0 && <Box backgroundColor="light200" height="1px" mb="sm" />}
      <Box alignItems="center" flexDirection="row" mb="xs">
        <Icon icon={ChevronRightIcon} size="15" />
        <Text ml="xs" weight="black">
          {date}
        </Text>
      </Box>
    </>
  )
}

Filmography.Header = Header
