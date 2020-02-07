import React, { useEffect, useState } from 'react'

import { BasicLayout } from '../../layouts'
import {
  Centered,
  Listing,
  ListingItem,
  ListingLoader,
  Section,
  Thumb,
  TitleScreen
} from '../../components'
import { getGenres } from '../../api/genres'
import { getImageUrl } from '../../constants/image'
import { getTrending } from '../../api/trending'

export const Trending = ({ navigation }) => {
  const [moviesTrending, setMoviesTrending] = useState()
  const [moviesGenre, setMovieGenre] = useState()
  const [showsTrending, setShowsTrending] = useState()
  const [showsGenre, setShowsGenre] = useState()
  const [peoplesTrending, setPeoplesTrending] = useState()

  useEffect(() => {
    getGenres(setMovieGenre)
    getTrending(setMoviesTrending)
    getGenres(setShowsGenre, 'tv')
    getTrending(setShowsTrending, 'tv')
    getTrending(setPeoplesTrending, 'person')
  }, [])

  return (
    <BasicLayout>
      <Centered>
        <TitleScreen>Trending</TitleScreen>
      </Centered>
      <Section onPress={() => navigation.push('Shows')} title="Tv Shows">
        {showsTrending && showsTrending.results && showsGenre ? (
          <Listing
            data={showsTrending.results}
            keyExtractor={item => `${item.id}`}
            renderItem={({ index, item }) => (
              <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
                <Thumb
                  backgroundUri={getImageUrl(item.poster_path)}
                  onPress={() => navigation.push('Show', { id: item.id })}
                />
              </ListingItem>
            )}
          />
        ) : (
          <ListingLoader numberOfColumns={2} numberOfColumnsTablet={3} withoutTitle />
        )}
      </Section>
      <Section onPress={() => navigation.push('Movies')} title="Movies">
        {moviesTrending && moviesTrending.results && moviesGenre ? (
          <Listing
            data={moviesTrending.results}
            keyExtractor={item => `${item.id}`}
            renderItem={({ index, item }) => (
              <ListingItem isFirst={index === 0} numberOfColumns={2} numberOfColumnsTablet={3}>
                <Thumb
                  backgroundUri={getImageUrl(item.poster_path)}
                  onPress={() => navigation.push('Movie', { id: item.id })}
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
                <Thumb
                  aspectRatio={2 / 3}
                  backgroundUri={getImageUrl(item.profile_path)}
                  onPress={() => navigation.push('People', { id: item.id, name: item.name })}
                  title={item.name}
                />
              </ListingItem>
            )}
          />
        ) : (
          <ListingLoader />
        )}
      </Section>
    </BasicLayout>
  )
}
