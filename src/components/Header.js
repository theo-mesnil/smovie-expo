import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Animated, Platform } from 'react-native'
import Constants from 'expo-constants'

import { useTheme } from '../contexts/theme'

import { Icon } from './Icon'
import { Box } from './Box'
import { Touchable } from './Touchable'
import { Text } from './Text'

export const headerHeight =
  Platform.select({
    android: 56,
    default: 44
  }) + Constants.statusBarHeight

export const paddingHeader = Platform.select({
  android: headerHeight,
  default: headerHeight - Constants.statusBarHeight
})

export function Header({
  content,
  iconName = 'arrow-left',
  styleTitle,
  styleWrapper,
  title,
  withBackButton
}) {
  const navigation = useNavigation()
  const theme = useTheme()

  const styleWrapperFinal = styleWrapper || {
    shadowOpacity: 0.3,
    backgroundColor: theme.values.colors.ahead,
    elevation: 5
  }

  return (
    <Box height={headerHeight} position="absolute" top="0" width={1} zIndex={1}>
      <Box
        alignItems="center"
        as={Animated.View}
        backgroundColor={styleWrapper ? undefined : 'ahead'}
        bottom="0"
        flexDirection="row"
        height={headerHeight}
        left="0"
        paddingLeft="lg"
        paddingRight="lg"
        paddingTop={Constants.statusBarHeight}
        right="0"
        style={{
          shadowRadius: 5,
          shadowColor: theme.values.colors.shadow,
          shadowOffset: { height: 0, width: 0 },
          borderBottom: 0,
          ...styleWrapperFinal
        }}
        top="0"
      >
        {withBackButton && (
          <Touchable onPress={() => navigation.goBack(null)}>
            <Box mr="sm">
              <Icon color="dark900" name={iconName} size={30} />
            </Box>
          </Touchable>
        )}
        <Box
          alignItems="center"
          as={Animated.View}
          flex={1}
          mr={withBackButton ? 30 : undefined}
          style={styleTitle}
        >
          {content}
          {title && (
            <Text fontSize="h3" numberOfLines={1} weight="bold">
              {title}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}
