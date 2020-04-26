import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native'

import { BasicLayout } from '../../../layouts'
import { Box, Centered, Header, Text, Thumb, ThumbLoader, VoteAverage } from '../../../components'
import { getSeasonDetail } from '../../../api/show'
import { getImageUrl } from '../../../constants/image'

import * as S from './styled'

export function Season() {
  const route = useRoute()
  const [seasonDetail, setSeasonDetail] = useState()
  const seasonName = route.params.seasonName
  const showId = route.params.id
  const seasonNumber = route.params.seasonNumber

  useEffect(() => {
    getSeasonDetail(setSeasonDetail, showId, seasonNumber)
  }, [seasonNumber, showId])

  return (
    <BasicLayout>
      <Header title={seasonName} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Centered marginTop={70} withMaxSize>
          {seasonDetail ? (
            <Box mt={40}>
              {seasonDetail.episodes.map(episode => (
                <S.Episode key={episode.name}>
                  {!!episode.still_path && (
                    <Box mb="md" mr="sm" width="100%">
                      <Thumb aspectRatio={16 / 9} backgroundUri={getImageUrl(episode.still_path)} />
                    </Box>
                  )}
                  <Text fontSize="h2" mb="sm" numberOfLines={3} weight="bold">
                    {`${episode.episode_number}. ${episode.name}`}
                  </Text>
                  {!!episode.overview && <Text color="dark400">{episode.overview}</Text>}
                  <Box
                    alignItems="flex-end"
                    flexDirection="row"
                    justifyContent="space-between"
                    mt="sm"
                  >
                    {!!episode.vote_average && (
                      <VoteAverage vote={episode.vote_average} weight="regular" />
                    )}
                    <Text>{format(new Date(episode.air_date), 'MM/dd/yyyy')}</Text>
                  </Box>
                </S.Episode>
              ))}
            </Box>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <Box mt={40}>
              {['1', '2', '3', '4', '5'].map(item => (
                <Box
                  backgroundColor="light600"
                  borderRadius="md"
                  key={item}
                  mb="xl"
                  paddingBottom="sm"
                  paddingLeft="sm"
                  paddingRight="sm"
                  paddingTop="sm"
                >
                  <Box mr="sm" width="100%">
                    <ThumbLoader aspectRatio={16 / 9} />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Centered>
      </ScrollView>
    </BasicLayout>
  )
}
