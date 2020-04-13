import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BasicLayout } from '../../layouts'
import { Box, Button, ContentHeader, Modal, Padding, Text, Thumb } from '../../components'
import { getDiscover } from '../../api/discover'
import { getImageUrl } from '../../constants/image'
import { isTablet } from '../../constants/screen'
import { useTheme } from '../../contexts/theme'

export function Shows() {
  const numberOfColumns = isTablet ? 6 : 3
  const theme = useTheme()
  const navigation = useNavigation()
  const [discover, setDiscover] = useState()
  const [selectTvShow, setSelectTvShow] = useState()

  useEffect(() => {
    getDiscover(setDiscover, 'tv')
  }, [])

  return (
    <>
      <BasicLayout>
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
                    onLongPress={() => setSelectTvShow(item)}
                    onPress={() => {
                      navigation.push('Show', { id: item.id })
                    }}
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
      <Modal
        closeModal={() => setSelectTvShow()}
        isVisible={!!selectTvShow}
        pipeColor="rgba(255, 255, 255, 0.7)"
      >
        {selectTvShow && (
          <>
            <ContentHeader
              aspectRatioCover={isTablet ? 16 / 4 : 16 / 9}
              borderOnCover
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
