import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BasicLayout } from '../../layouts'
import {
  Button,
  ContentHeader,
  Header,
  Modal,
  Padding,
  paddingHeader,
  Text
} from '../../components'
import { getDiscover } from '../../api/discover'
import { isTablet } from '../../constants/screen'
import { useTheme } from '../../contexts/theme'

import { ShowItem } from './ShowItem'

export function Shows() {
  const numberOfColumns = isTablet ? 6 : 3
  const theme = useTheme()
  const navigation = useNavigation()
  const [discover, setDiscover] = useState()
  const [selectTvShow, setSelectTvShow] = useState()
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
      getDiscover(setDiscover, 'tv', [{ name: 'page', value: page }])
    } else if (page < maxPage) {
      getDiscover(getNewPageData, 'tv', [{ name: 'page', value: page }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <BasicLayout>
        <Header title="Shows" />
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
              <ShowItem onLongPress={() => setSelectTvShow(props.item)} {...props} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </BasicLayout>
      <Modal
        closeAction={() => setSelectTvShow()}
        isVisible={!!selectTvShow}
        pipeColor="rgba(255, 255, 255, 0.7)"
        withPadding={false}
      >
        {selectTvShow && (
          <>
            <ContentHeader
              aspectRatioCover={isTablet ? 16 / 4 : 16 / 9}
              borderOnCover
              colorGradient={['transparent', theme.values.colors.ahead]}
              cover={selectTvShow.backdrop_path}
              date={selectTvShow.first_air_date}
              imageStyle={{ borderRadius: theme.values.radii.xl }}
              poster={selectTvShow.poster_path}
              title={selectTvShow.name}
              voteAverage={selectTvShow.vote_average}
            />
            <Padding pt="xs">
              <Text numberOfLines={10}>{selectTvShow.overview}</Text>
              <Button
                alignItems="center"
                mt="lg"
                onPress={() => {
                  navigation.push('Show', { id: selectTvShow.id })
                  setSelectTvShow()
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
