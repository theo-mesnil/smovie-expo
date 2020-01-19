/* eslint-disable react/no-multi-comp */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import merge from 'lodash.merge'

import { Trending } from '../screens/Trending'
import { Movies } from '../screens/Movies'
import { Shows } from '../screens/Shows'
import { More } from '../screens/More'
import { Icon } from '../components/Icon'
import { useTheme } from '../contexts/theme'
import { isAndroid } from '../constants/screen'

const androidTabBarStyle = isAndroid
  ? {
      style: {
        paddingTop: 4,
        height: 60
      },
      labelStyle: {
        paddingBottom: 10
      }
    }
  : undefined

const Tab = createBottomTabNavigator()

export function TabBar() {
  const theme = useTheme()

  const tabBarOptions = merge(
    {
      activeTintColor: theme.values.colors.primary500,
      inactiveTintColor: theme.values.colors.dark900,
      style: {
        backgroundColor: theme.values.background.ahead,
        borderTopColor: theme.values.background.ahead
      }
    },
    androidTabBarStyle
  )

  function tabBarIcon({ focused, name }) {
    return <Icon color={focused ? 'primary500' : 'dark900'} name={name} size={24} />
  }

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        component={Trending}
        name="Trending"
        options={{ tabBarIcon: props => tabBarIcon({ ...props, name: 'star' }) }}
      />
      <Tab.Screen
        component={Movies}
        name="Movies"
        options={{ tabBarIcon: props => tabBarIcon({ ...props, name: 'film' }) }}
      />
      <Tab.Screen
        component={Shows}
        name="Shows"
        options={{ tabBarIcon: props => tabBarIcon({ ...props, name: 'tv' }) }}
      />
      <Tab.Screen
        component={More}
        name="More"
        options={{ tabBarIcon: props => tabBarIcon({ ...props, name: 'menu' }) }}
      />
    </Tab.Navigator>
  )
}
