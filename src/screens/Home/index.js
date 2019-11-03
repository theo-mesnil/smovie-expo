import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { BasicLayout } from '../../layouts/Basic'
import { Centered } from '../../components/Centered'
import { formatGenres } from '../../utils/formatGenres'
import { getGenres } from '../../api/genres'
import { getImageUrl } from '../../constants/image'
import { getTrending } from '../../api/trending'
import { Listing, ListingItem } from '../../components/Listing'
import { Section } from '../../components/Section'
import { Thumb } from '../../components/Thumb'
import { TitleScreen } from '../../components/TitleScreen'

export const Home = ({ navigation }) => {
  const [trending, setTrending] = useState()
  const [movieGenres, setMovieGenres] = useState()

  useEffect(() => {
    getGenres(setMovieGenres)
    getTrending(setTrending)
  }, [])

  return (
    <BasicLayout>
      <ScrollView>
        <Centered>
          <TitleScreen>Home</TitleScreen>
        </Centered>
        {trending && trending.results && (
          <Section onPress={() => navigation.navigate('Movies')} title="Trendy movies">
            <Listing
              data={trending.results}
              keyExtractor={item => `${item.id}`}
              renderItem={({ index, item }) => (
                <ListingItem isFirst={index === 0}>
                  <Thumb
                    backgroundUri={getImageUrl(item.backdrop_path)}
                    onPress={() => navigation.navigate('Movie')}
                    subtitle={!!movieGenres && formatGenres(movieGenres.genres, item.genre_ids)}
                    title={item.title}
                  />
                </ListingItem>
              )}
            />
          </Section>
        )}
        {trending &&
          trending.results &&
          [...Array(4)].map((_, index) => (
            <Section
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onPress={() => navigation.navigate('Movies')}
              title="Trendy movies"
            >
              <Listing
                data={trending.results}
                keyExtractor={item => `${item.id}`}
                renderItem={({ index, item }) => (
                  <ListingItem isFirst={index === 0}>
                    <Thumb
                      backgroundUri={getImageUrl(item.backdrop_path)}
                      onPress={() => navigation.navigate('Movie')}
                      subtitle={!!movieGenres && formatGenres(movieGenres.genres, item.genre_ids)}
                      title={item.title}
                    />
                  </ListingItem>
                )}
              />
            </Section>
          ))}
      </ScrollView>
    </BasicLayout>
  )
}
