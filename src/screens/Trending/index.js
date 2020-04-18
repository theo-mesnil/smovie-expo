import React, { useEffect, useState } from 'react'
import { Animated, ImageBackground } from 'react-native'

import { BasicLayout } from '../../layouts'
import {
  Box,
  Button,
  GradientBackground,
  Listing,
  ListingItem,
  ListingLoader,
  Section,
  Text,
  Thumb
} from '../../components'
import { getGenres } from '../../api/genres'
import { getImageUrl } from '../../constants/image'
import { getTrending } from '../../api/trending'
import { getPeoplePopular } from '../../api/people'
import { isTablet, windowWidth } from '../../constants/screen'

export function Trending({ navigation }) {
  const [moviesTrending, setMoviesTrending] = useState()
  const [moviesGenre, setMovieGenre] = useState()
  const [showsTrending, setShowsTrending] = useState()
  const [showsGenre, setShowsGenre] = useState()
  const [peoplesTrending, setPeoplesTrending] = useState()
  const [scrollY] = useState(new Animated.Value(0))
  const aspectRatioCover = isTablet ? 16 / 5 : 16 / 18
  const inputRange = windowWidth / aspectRatioCover - 100

  useEffect(() => {
    getGenres(setMovieGenre)
    getTrending(setMoviesTrending)
    getGenres(setShowsGenre, 'tv')
    getTrending(setShowsTrending, 'tv')
    getPeoplePopular(setPeoplesTrending)
  }, [])

  return (
    <BasicLayout>
      {showsTrending && showsTrending.results && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Animated.View
            aspectRatio={aspectRatioCover}
            style={{
              transform: [
                {
                  scale: scrollY.interpolate({
                    inputRange: [0, inputRange - 1, inputRange],
                    outputRange: [1.3, 1, 1]
                  })
                }
              ]
            }}
          >
            <Animated.View
              style={{
                opacity: scrollY.interpolate({
                  inputRange: [0, inputRange],
                  outputRange: [1, 0]
                })
              }}
            >
              <ImageBackground
                source={{
                  uri: getImageUrl(showsTrending.results?.[0]?.backdrop_path, 1280)
                }}
                style={{
                  aspectRatio: aspectRatioCover
                }}
              />
            </Animated.View>
            <GradientBackground />
          </Animated.View>
        </Box>
      )}
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ],
          {
            useNativeDriver: true
          }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          alignItems="center"
          as={Box}
          aspectRatio={aspectRatioCover}
          justifyContent="flex-end"
          style={{
            opacity: scrollY.interpolate({
              inputRange: [0, windowWidth / aspectRatioCover - 50],
              outputRange: [1, 0]
            })
          }}
        >
          {showsTrending && showsTrending.results && (
            <Box alignItems="center" paddingBottom={50}>
              <Text
                fontSize="h0"
                lineHeight={55}
                maxWidth={isTablet ? 600 : 300}
                mb="md"
                numberOfLines={2}
                paddingLeft="sm"
                paddingRight="sm"
                textAlign="center"
                weight="black"
              >
                {showsTrending.results?.[0]?.name}
              </Text>
              <Button
                iconName="eye"
                onPress={() => navigation.push('Show', { id: showsTrending.results?.[0]?.id })}
              >
                Discover
              </Button>
            </Box>
          )}
        </Animated.View>
        <Section onPress={() => navigation.navigate('Shows')} title="Tv Shows">
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
        <Section onPress={() => navigation.navigate('Movies')} title="Movies">
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
      </Animated.ScrollView>
    </BasicLayout>
  )
}
