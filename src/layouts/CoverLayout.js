import React, { useState } from 'react'
import { Animated } from 'react-native'

import { Box, Button, Showcase, Text } from '../components'
import { isTablet, windowWidth } from '../constants/screen'

import { BasicLayout } from './Basic'

export function CoverLayout({
  aspectRatioCover,
  backdropCover,
  children,
  coverContentOnPress,
  coverContentTitle
}) {
  const [scrollY] = useState(new Animated.Value(0))

  const inputRange = windowWidth / aspectRatioCover - 100

  return (
    <BasicLayout>
      {backdropCover && (
        <Showcase
          aspectRatioCover={aspectRatioCover}
          backdropImage={backdropCover}
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
        {coverContentTitle && (
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
            <Box alignItems="center" paddingBottom={coverContentOnPress ? 50 : 20}>
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
                {coverContentTitle}
              </Text>
              {coverContentOnPress && (
                <Button iconName="eye" onPress={coverContentOnPress}>
                  Discover
                </Button>
              )}
            </Box>
          </Animated.View>
        )}
        {children}
      </Animated.ScrollView>
    </BasicLayout>
  )
}
