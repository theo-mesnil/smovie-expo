import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

import { BasicLayout } from '../../layouts'
import { Box, Button, Listing, ListingLoader, Section, Text } from '../../components'
import { getTrending } from '../../api/trending'
import { getPeoplePopular } from '../../api/people'
import { isTablet, windowWidth } from '../../constants/screen'
import { keyExtractor } from '../../utils/keyExtractor'

import { PeopleItem } from './PeopleItem'
import { MovieItem } from './MovieItem'
import { ShowItem } from './ShowItem'
import { Showcase } from './Showcase'

export function Trending({ navigation }) {
  const [moviesTrending, setMoviesTrending] = useState()
  const [showsTrending, setShowsTrending] = useState()
  const [peoplesTrending, setPeoplesTrending] = useState()
  const [scrollY] = useState(new Animated.Value(0))
  const aspectRatioCover = isTablet ? 16 / 5 : 16 / 18
  const inputRange = windowWidth / aspectRatioCover - 100

  useEffect(() => {
    getTrending(setMoviesTrending)
    getTrending(setShowsTrending, 'tv')
    getPeoplePopular(setPeoplesTrending)
  }, [])

  return (
    <BasicLayout>
      {showsTrending && showsTrending.results && (
        <Showcase
          aspectRatioCover={aspectRatioCover}
          backdropImage={showsTrending.results?.[0]?.backdrop_path}
          styleCover={{
            transform: [
              {
                scale: scrollY.interpolate({
                  inputRange: [0, inputRange - 1, inputRange],
                  outputRange: [1.3, 1, 1]
                })
              }
            ]
          }}
          styleGradient={{
            opacity: scrollY.interpolate({
              inputRange: [0, inputRange],
              outputRange: [1, 0]
            })
          }}
        />
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
      </Animated.ScrollView>
    </BasicLayout>
  )
}
