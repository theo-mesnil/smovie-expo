import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useTheme } from '../../contexts/theme'
import { BasicLayout } from '../../layouts'
import {
  Box,
  Button,
  ContentHeader,
  Modal,
  Padding,
  Text,
  Thumb,
  TitleScreen
} from '../../components'
import { getDiscover } from '../../api/discover'
import { getImageUrl } from '../../constants/image'
import { isTablet } from '../../constants/screen'

export function Movies() {
  const numberOfColumns = isTablet ? 6 : 3
  const theme = useTheme()
  const navigation = useNavigation()
  const [discover, setDiscover] = useState()
  const [selectMovie, setSelectMovie] = useState()

  useEffect(() => {
    getDiscover(setDiscover, 'movie')
  }, [])

  return (
    <>
      <BasicLayout>
        <Padding pb={0} pt={0}>
          <TitleScreen>Movies</TitleScreen>
        </Padding>
        {discover && (
          <Padding pb={0} pr="xs" pt={0}>
            <FlatList
              data={discover.results}
              keyExtractor={item => `${item.id}_${Math.random()}`}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <Box flex={1 / numberOfColumns}>
                  <Thumb
                    backgroundUri={getImageUrl(item.poster_path)}
                    onPress={
                      () => setSelectMovie(item)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                    paddingBottom="md"
                    paddingRight="md"
                  />
                </Box>
              )}
              showsVerticalScrollIndicator={false}
            />
          </Padding>
        )}
      </BasicLayout>
      <Modal closeModal={() => setSelectMovie()} isVisible={!!selectMovie}>
        {selectMovie && (
          <>
            <ContentHeader
              aspectRatioCover={isTablet ? 16 / 4 : 16 / 9}
              borderOnCover
              cover={selectMovie.backdrop_path}
              date={selectMovie.release_date}
              imageStyle={{ borderRadius: theme.values.radii.xl }}
              poster={selectMovie.poster_path}
              title={selectMovie.title}
              voteAverage={selectMovie.vote_average}
            />
            <Padding pt="xs">
              <Text numberOfLines={10}>{selectMovie.overview}</Text>
              <Button
                alignItems="center"
                mt="lg"
                onPress={() => {
                  setSelectMovie()
                  navigation.push('Movie', { id: selectMovie.id })
                }}
              >
                See more
              </Button>
            </Padding>
          </>
        )}
      </Modal>
    </>
  )
}
