import merge from 'lodash.merge'

import { coreTheme } from './core'
import { darkTheme } from './dark'

export const createTheme = theme => {
  const themeConfig = theme => {
    switch (theme) {
      case 'dark':
        return darkTheme
      default:
        return coreTheme
    }
  }

  return merge({}, coreTheme, themeConfig(theme))
}
