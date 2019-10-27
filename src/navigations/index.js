import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Movie } from '../screens/Movie'
import { Show } from '../screens/Show'

import Tabbar from './tabbar'

const AppNavigator = createStackNavigator({
  Tabbar,
  Movie,
  Show
})

export default createAppContainer(AppNavigator)
