import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Movie } from '../screens/Movie'
import { Show } from '../screens/Show'

import { TabNavigator } from './tabbar'

const AppNavigator = createStackNavigator(
  {
    TabNavigator,
    Movie,
    Show
  },
  { headerMode: 'none' }
)

export default createAppContainer(AppNavigator)
