export const colors = {
  light100: '#4f5972',
  light200: '#475066',
  light300: '#3f475b',
  light400: '#373e4f',
  light500: '#2f3544',
  light600: '#272c38',
  light700: '#1f232c',
  light800: '#171a21',
  light900: '#0f1115',
  dark100: '#8a94ad',
  dark200: '#959fb5',
  dark300: '#a1a9bd',
  dark400: '#acb4c5',
  dark500: '#b8becd',
  dark600: '#c3c9d5',
  dark700: '#cfd3de',
  dark800: '#dadee6',
  dark900: '#e6e8ee'
}

export const darkTheme = {
  colors: {
    ...colors,
    behind: colors.light900,
    ahead: colors.light700,
    aheadRgba: 'rgba(31, 35, 44, 1)',
    aheadRgbaTransparent: 'rgba(31, 35, 44, 0)',
    shadow: '#000',
    border: colors.light600
  }
}
