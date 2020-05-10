import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useTheme } from '../../contexts/theme'
import { BasicLayout } from '../../layouts'
import {
  Button,
  ContentHeader,
  Header,
  Modal,
  MovieItem,
  Padding,
  paddingHeader,
  Text
} from '../../components'
import { getDiscover } from '../../api/discover'
import { isTablet } from '../../constants/screen'

export function Movies() {
  const numberOfColumns = isTablet ? 6 : 3
  const theme = useTheme()
  const navigation = useNavigation()
  const [discover, setDiscover] = useState()
  const [selectMovie, setSelectMovie] = useState()
  const [page, setPage] = useState(1)
  const maxPage = 20

  function setNewPage() {
    if (page < maxPage) {
      setPage(page + 1)
    }
  }

  function getNewPageData(data) {
    setDiscover(discover.concat(data))
  }

  useEffect(() => {
    if (page === 1) {
      getDiscover(setDiscover, 'movie', [{ name: 'page', value: page }])
    } else if (page < maxPage) {
      getDiscover(getNewPageData, 'movie', [{ name: 'page', value: page }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <BasicLayout>
        <Header title="Movies" />
        {discover && (
          <FlatList
            contentContainerStyle={{
              paddingTop: paddingHeader + theme.values.space.sm,
              paddingBottom: theme.values.space.lg,
              paddingHorizontal: theme.values.space.xs
            }}
            data={discover}
            initialNumToRender={20}
            keyExtractor={item => `${item.id}_${Math.random()}`}
            numColumns={numberOfColumns}
            onEndReached={setNewPage}
            onEndReachedThreshold={1}
            renderItem={props => (
              <MovieItem
                numberOfColumns={numberOfColumns}
                onLongPress={() => setSelectMovie(props.item)}
                {...props}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </BasicLayout>
      <Modal
        closeAction={() => setSelectMovie()}
        isVisible={!!selectMovie}
        pipeColor="rgba(255, 255, 255, 0.7)"
        withPadding={false}
      >
        {selectMovie && (
          <>
            <ContentHeader
              aspectRatioCover={isTablet ? 16 / 4 : 16 / 9}
              borderOnCover
              colorGradient={['transparent', theme.values.colors.ahead]}
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
                  navigation.push('Movie', { id: selectMovie.id })
                  setSelectMovie()
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
