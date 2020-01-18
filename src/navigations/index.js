import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Movie } from '../screens/Movie'
import { Show } from '../screens/Show'
import { People } from '../screens/People'
import { Genre } from '../screens/Genre'
import { Season } from '../screens/Show/Season'

import { TabNavigator } from './tabbar'

const AppNavigator = createStackNavigator(
  {
    TabNavigator,
    Movie,
    Show,
    Season,
    People,
    Genre
  },
  { headerMode: 'none' }
)

export default createAppContainer(AppNavigator)
