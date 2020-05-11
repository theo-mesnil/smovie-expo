import React, { useEffect, useState } from 'react'

import { Listing, ListingLoader, Section } from '../../components'
import { getTrending } from '../../api/trending'
import { getPeoplePopular } from '../../api/people'
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

  useEffect(() => {
    getTrending(setMoviesTrending)
    getTrending(setShowsTrending, 'tv')
    getPeoplePopular(setPeoplesTrending)
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
      headerTitle="Trending"
      withBackButton={false}
    >
      <Section onPress={() => navigation.navigate('Shows')} title="Tv Shows">
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
      <Section onPress={() => navigation.navigate('Movies')} title="Movies">
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
      <Section title="People">
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
