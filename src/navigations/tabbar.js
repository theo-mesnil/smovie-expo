import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Home } from '../screens/Home'
import { Movies } from '../screens/Movies'
import { Shows } from '../screens/Shows'

const TabNavigator = createBottomTabNavigator({
  Home,
  Movies,
  Shows
})

export default createAppContainer(TabNavigator)
