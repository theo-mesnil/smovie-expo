import React, { useEffect, useState } from 'react'
import i18n from 'i18n-js'

import { Listing, ListingLoader, Section } from '../../components'
import { useGetTrending } from '../../api/trending'
import { useGetPeoplePopular } from '../../api/people'
import { isTablet } from '../../constants/screen'
import { keyExtractor } from '../../utils/keyExtractor'
import { CoverLayout } from '../../layouts/CoverLayout'

import { PeopleItem } from './PeopleItem'
import { MovieItem } from './MovieItem'
import { ShowItem } from './ShowItem'

export function Trending({ navigation }) {
  const [moviesTrending, setMoviesTrending] = useState()
  const [showsTrending, setShowsTrending] = useState()
  const [peoplesTrending, setPeoplesTrending] = useState()
  const aspectRatioCover = isTablet ? 16 / 5 : 16 / 18
  const getTrending = useGetTrending()
  const getPeoplePopular = useGetPeoplePopular()

  useEffect(() => {
    getTrending(setMoviesTrending)
    getTrending(setShowsTrending, 'tv')
    getPeoplePopular(setPeoplesTrending)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function goToTrending() {
    navigation.push('Show', { id: showsTrending?.results?.[0]?.id })
  }

  return (
    <CoverLayout
      aspectRatioCover={aspectRatioCover}
      backdropCover={showsTrending?.results?.[0]?.backdrop_path}
      coverContentOnPress={goToTrending}
      coverContentTitle={showsTrending?.results?.[0]?.name}
      forceContentTitle
      headerTitle={i18n.t('trending')}
      withBackButton={false}
    >
      <Section onPress={() => navigation.navigate('Shows')} title={i18n.t('shows')}>
        {showsTrending && showsTrending.results ? (
          <Listing
            data={showsTrending.results}
            keyExtractor={keyExtractor}
            renderItem={props => <ShowItem {...props} />}
          />
        ) : (
          <ListingLoader numberOfColumns={2} numberOfColumnsTablet={3} withoutTitle />
        )}
      </Section>
      <Section onPress={() => navigation.navigate('Movies')} title={i18n.t('movies')}>
        {moviesTrending && moviesTrending.results ? (
          <Listing
            data={moviesTrending.results}
            keyExtractor={keyExtractor}
            renderItem={props => <MovieItem {...props} />}
          />
        ) : (
          <ListingLoader numberOfColumns={2} numberOfColumnsTablet={3} withoutTitle />
        )}
      </Section>
      <Section title={i18n.t('artists')}>
        {peoplesTrending && peoplesTrending.results ? (
          <Listing
            data={peoplesTrending.results}
            keyExtractor={keyExtractor}
            renderItem={props => <PeopleItem {...props} />}
          />
        ) : (
          <ListingLoader />
        )}
      </Section>
    </CoverLayout>
  )
}
