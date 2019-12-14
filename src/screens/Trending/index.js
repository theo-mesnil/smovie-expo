import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { BasicLayout } from '../../layouts/Basic'
import { Centered } from '../../components/Centered'
import { getGenres } from '../../api/genres'
import { getImageUrl } from '../../constants/image'
import { getTrending } from '../../api/trending'
import { Listing, ListingItem, ListingLoader } from '../../components/Listing'
import { Section } from '../../components/Section'
import { Thumb } from '../../components/Thumb'
import { TitleScreen } from '../../components/TitleScreen'

export const Trending = ({ navigation }) => {
  const [moviesTrending, setMoviesTrending] = useState()
  const [moviesGenre, setMovieGenre] = useState()
  const [showsTrending, setShowsTrending] = useState()
  const [showsGenre, setShowsGenre] = useState()
  const [peoplesTrending, setPeoplesTrending] = useState()

  useEffect(() => {
    setTimeout(() => {
      getGenres(setMovieGenre)
      getTrending(setMoviesTrending)
      getGenres(setShowsGenre, 'tv')
      getTrending(setShowsTrending, 'tv')
      getTrending(setPeoplesTrending, 'person')
    }, 1000)
  }, [])

  return (
    <BasicLayout>
      <ScrollView>
        <Centered>
          <TitleScreen>Trending</TitleScreen>
        </Centered>
        <Section onPress={() => navigation.navigate('Shows')} title="Tv Shows">
          {showsTrending && showsTrending.results && showsGenre ? (
            <Listing
              data={showsTrending.results}
              keyExtractor={item => `${item.id}`}
              renderItem={({ index, item }) => (
                <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
                  <Thumb
                    backgroundUri={getImageUrl(item.poster_path)}
                    onPress={() => navigation.navigate('Show')}
                  />
                </ListingItem>
              )}
            />
          ) : (
            <ListingLoader numberOfColumns={2} numberOfColumnsTablet={3} withoutTitle />
          )}
        </Section>
        <Section onPress={() => navigation.navigate('Movies')} title="Movies">
          {moviesTrending && moviesTrending.results && moviesGenre ? (
            <Listing
              data={moviesTrending.results}
              keyExtractor={item => `${item.id}`}
              renderItem={({ index, item }) => (
                <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
                  <Thumb
                    backgroundUri={getImageUrl(item.poster_path)}
                    onPress={() => navigation.navigate('Movie')}
                  />
                </ListingItem>
              )}
            />
          ) : (
            <ListingLoader numberOfColumns={2} numberOfColumnsTablet={3} withoutTitle />
          )}
        </Section>
        <Section title="People">
          {peoplesTrending && peoplesTrending.results ? (
            <Listing
              data={peoplesTrending.results}
              keyExtractor={item => `${item.id}`}
              renderItem={({ index, item }) => (
                <ListingItem isFirst={index === 0}>
                  <Thumb backgroundUri={getImageUrl(item.profile_path)} title={item.name} />
                </ListingItem>
              )}
            />
          ) : (
            <ListingLoader />
          )}
        </Section>
      </ScrollView>
    </BasicLayout>
  )
}
