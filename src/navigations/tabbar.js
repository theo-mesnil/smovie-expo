/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Trending } from '../screens/Trending'
import { Icon } from '../components/Icon'
import { Movies } from '../screens/Movies'
import { Shows } from '../screens/Shows'
import { More } from '../screens/More'
import { isIpad } from '../constants/screen'

function getTabIcon(routeName) {
  switch (routeName) {
    case 'Trending':
      return 'star'
    case 'Movies':
      return 'film'
    case 'Shows':
      return 'tv'
    case 'More':
      return 'menu'
    default:
      return 'x'
  }
}

const padding = isIpad ? 0 : 5

export const TabNavigator = createBottomTabNavigator(
  {
    Trending,
    Movies,
    Shows,
    More
  },
  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarOptions: {
        activeTintColor: screenProps.theme.colors.primary500,
        inactiveTintColor: screenProps.theme.colors.dark900,
        style: {
          paddingTop: padding,
          height: 60,
          backgroundColor: screenProps.theme.background.ahead,
          borderTopColor: screenProps.theme.colors.light900
        },
        labelStyle: {
          paddingBottom: padding
        }
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        return (
          <Icon color={focused ? 'primary500' : 'dark900'} name={getTabIcon(routeName)} size={27} />
        )
      }
    })
  }
)
