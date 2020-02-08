import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Movie } from '../screens/Movie'
import { Show } from '../screens/Show'
import { People } from '../screens/People'
import { Genre } from '../screens/Genre'
import { Season } from '../screens/Show/Season'

import { TabBar } from './tabbar'

const Stack = createStackNavigator()

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={TabBar} name="TabBar" />
        <Stack.Screen component={Movie} name="Movie" />
        <Stack.Screen component={Show} name="Show" />
        <Stack.Screen component={Season} name="Season" />
        <Stack.Screen component={People} name="People" />
        <Stack.Screen component={Genre} name="Genre" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
