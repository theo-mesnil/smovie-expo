/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Home } from '../screens/Home'
import { Icon } from '../components/Icon'
import { Movies } from '../screens/Movies'
import { Shows } from '../screens/Shows'
import { More } from '../screens/More'

function getTabIcon(routeName) {
  switch (routeName) {
    case 'Home':
      return 'home'
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

export const TabNavigator = createBottomTabNavigator(
  {
    Home,
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
          paddingTop: 5,
          height: 60,
          backgroundColor: screenProps.theme.colors.light900,
          borderTopColor: screenProps.theme.colors.light900
        },
        labelStyle: {
          paddingBottom: 5
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
