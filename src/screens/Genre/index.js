import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native'

import { BasicLayout } from '../../layouts'
import { Header, paddingHeader } from '../../components'
import { useTheme } from '../../contexts/theme'
import { useGetDiscover } from '../../api/discover'
import { isTablet } from '../../constants/screen'

import { Item } from './Item'

export function Genre() {
  const numberOfColumns = isTablet ? 6 : 3
  const route = useRoute()
  const theme = useTheme()
  const [discover, setDiscover] = useState()
  const [page, setPage] = useState(1)
  const maxPage = 20
  const getDiscover = useGetDiscover()

  const type = route?.params?.type
  const genreId = route?.params?.id
  const genreName = route?.params?.name

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
      getDiscover(setDiscover, type, [
        { name: 'page', value: page },
        { name: 'with_genres', value: genreId }
      ])
    } else if (page < maxPage) {
      getDiscover(getNewPageData, type, [
        { name: 'page', value: page },
        { name: 'with_genres', value: genreId }
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreId, page, type])

  return (
    <BasicLayout>
      <Header title={genreName} withBackButton />
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
          renderItem={props => <Item numberOfColumns={numberOfColumns} type={type} {...props} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </BasicLayout>
  )
}
