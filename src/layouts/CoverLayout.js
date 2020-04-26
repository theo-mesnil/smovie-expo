import React, { useState } from 'react'
import { Animated } from 'react-native'

import { Box, Button, Header, Showcase, Text } from '../components'
import { isTablet, windowWidth } from '../constants/screen'
import { useTheme } from '../contexts/theme'

import { BasicLayout } from './Basic'

export function CoverLayout({
  aspectRatioCover,
  backdropCover,
  children,
  coverContentOnPress,
  coverContentTitle,
  headerTitle,
  withBackButton = true
}) {
  const theme = useTheme()
  const [scrollY] = useState(new Animated.Value(0))
  const [backgroundColor] = useState(new Animated.Value(0))
  const inputRange = windowWidth / aspectRatioCover - 100

  return (
    <BasicLayout>
      <Header
        styleTitle={{
          opacity: scrollY.interpolate({
            inputRange: [inputRange - 30, inputRange],
            outputRange: [0, 1]
          })
        }}
        styleWrapper={{
          backgroundColor: scrollY.interpolate({
            inputRange: [inputRange - 30, inputRange],
            outputRange: [theme.values.colors.aheadRgbaTransparent, theme.values.colors.aheadRgba]
          }),
          shadowOpacity: scrollY.interpolate({
            inputRange: [inputRange - 30, inputRange],
            outputRange: [0, 0.3]
          }),
          elevation: scrollY.interpolate({
            inputRange: [inputRange, inputRange],
            outputRange: [0, 5]
          })
        }}
        title={headerTitle}
        withBackButton={withBackButton}
      />
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
          [
            {
              nativeEvent: { contentOffset: { y: backgroundColor } }
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
