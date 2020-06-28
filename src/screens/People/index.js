import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import i18n from 'i18n-js'

import { Box, Informations, Listing, Modal, Padding, Section, Text } from '../../components'
import { useGetPeopleDetail } from '../../api/people'
import { useConvertToDate } from '../../utils/formatTime'
import { isTablet } from '../../constants/screen'
import { CoverLayout } from '../../layouts/CoverLayout'

import { KnowForItem } from './KnowforItem'
import { Movies } from './Movies'
import { Shows } from './Shows'

export function People() {
  const route = useRoute()
  const [peopleDetail, setPeopleDetail] = useState()
  const [peopleCredits, setPeopleCredits] = useState()
  const [peoplePopular, setPeoplePopular] = useState()
  const [biographyModalVisible, setBiographyModalVisible] = useState(false)
  const aspectRatioCover = isTablet ? 16 / 9 : 16 / 18
  const getPeopleDetail = useGetPeopleDetail()
  const convertToDate = useConvertToDate()

  useEffect(() => {
    const peopleId = route.params.id
    getPeopleDetail(setPeopleDetail, peopleId)
    getPeopleDetail(setPeopleCredits, peopleId, '/combined_credits')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.id])

  useEffect(() => {
    setPeoplePopular(
      !!peopleDetail &&
        !!peopleCredits &&
        peopleCredits[peopleDetail.known_for_department === 'Acting' ? 'cast' : 'crew'].reduce(
          (previous, current) => {
            const object = previous.filter(
              object => object.original_title === current.original_title
            )
            if (object.length === 0) {
              if (previous.job && current.job) {
                previous.push({ ...current, job: `${previous.job}, ${current.job}` })
              } else {
                previous.push(current)
              }
            }
            return previous
          },
          []
        )
    )
  }, [peopleCredits, peopleDetail])

  const movies = !!peoplePopular && peoplePopular.filter(item => item.media_type === 'movie')
  const shows = !!peoplePopular && peoplePopular.filter(item => item.media_type === 'tv')

  return (
    <>
      <CoverLayout
        aspectRatioCover={aspectRatioCover}
        backdropCover={peopleDetail?.profile_path}
        coverContentTitle={peopleDetail?.name}
        headerTitle={peopleDetail?.name}
      >
        {peopleDetail && (
          <>
            <Padding marginTop={-50}>
              <Informations title={peopleDetail.known_for_department}>
                <Text>
                  {peopleDetail.place_of_birth &&
                    `${i18n.t('birth.in')} ${peopleDetail.place_of_birth} `}
                  {peopleDetail.birthday &&
                    `${i18n.t('birth.on')} ${convertToDate(peopleDetail.birthday)}`}
                  {peopleDetail.deathday &&
                    ` ${i18n.t('birth.die')} ${convertToDate(peopleDetail.deathday)}`}
                </Text>
              </Informations>
              {peopleDetail.biography?.length > 0 && (
                <Informations title={i18n.t('biography')}>
                  <Text numberOfLines={3} onPress={() => setBiographyModalVisible(true)}>
                    {peopleDetail.biography.replace('\n\n', '\n')}
                  </Text>
                </Informations>
              )}
            </Padding>
            {peoplePopular && (
              <Section title={i18n.t('knowfor')}>
                <Listing
                  data={peoplePopular.slice(0, 20)}
                  keyExtractor={item => `${item.id}_${Math.random()}`}
                  renderItem={props => <KnowForItem {...props} />}
                />
              </Section>
            )}
            {shows?.length > 0 && (
              <Section title={i18n.t('shows')}>
                <Padding pb={0} pt={0}>
                  <Box
                    backgroundColor="ahead"
                    borderRadius="md"
                    paddingLeft="sm"
                    paddingRight="sm"
                    paddingTop="sm"
                  >
                    <Shows shows={shows} />
                  </Box>
                </Padding>
              </Section>
            )}
            {movies?.length > 0 && (
              <Section title={i18n.t('movies')}>
                <Padding pb={0} pt={0}>
                  <Box
                    backgroundColor="ahead"
                    borderRadius="md"
                    paddingLeft="sm"
                    paddingRight="sm"
                    paddingTop="sm"
                  >
                    <Movies movies={movies} />
                  </Box>
                </Padding>
              </Section>
            )}
          </>
        )}
      </CoverLayout>
      <Modal closeAction={() => setBiographyModalVisible(false)} isVisible={biographyModalVisible}>
        {peopleDetail && <Text>{peopleDetail.biography}</Text>}
      </Modal>
    </>
  )
}
