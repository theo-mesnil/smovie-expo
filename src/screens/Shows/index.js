import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

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

export function Shows() {
  const navigation = useNavigation()
  const [discover, setDiscover] = useState()
  const [selectTvShow, setSelectTvShow] = useState()

  useEffect(() => {
    getDiscover(setDiscover, 'tv')
  }, [])

  return (
    <>
      <BasicLayout>
        <Padding pb={0} pt={0}>
          <TitleScreen>Tv Shows</TitleScreen>
        </Padding>
        {discover && (
          <Padding pb={0} pt={0}>
            <FlatList
              data={discover.results}
              keyExtractor={item => `${item.id}_${Math.random()}`}
              numColumns={isTablet ? 6 : 3}
              renderItem={({ item }) => (
                <Box flex={1} paddingBottom="md" paddingRight="md">
                  <Thumb
                    backgroundUri={getImageUrl(item.poster_path)}
                    onPress={
                      () => setSelectTvShow(item)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                </Box>
              )}
              showsVerticalScrollIndicator={false}
            />
          </Padding>
        )}
      </BasicLayout>
      <Modal closeModal={() => setSelectTvShow()} isVisible={!!selectTvShow}>
        {selectTvShow && (
          <>
            <ContentHeader
              aspectRatioCover={16 / 9}
              borderOnCover
              cover={selectTvShow.backdrop_path}
              date={selectTvShow.first_air_date}
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
                  setSelectTvShow()
                  navigation.push('Show', { id: selectTvShow.id })
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
