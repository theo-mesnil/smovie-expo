const colors = {
  primary100: '#dcfdff',
  primary500: '#00adb5',
  primary900: '#00888e',
  secondary100: '#fcffc1',
  secondary500: '#cbd400',
  secondary900: '#a6ad00',
  dark100: '#525252',
  dark200: '#474747',
  dark300: '#3d3d3d',
  dark400: '#333333',
  dark500: '#292929',
  dark600: '#1f1f1f',
  dark700: '#141414',
  dark800: '#0a0a0a',
  dark900: '#000',
  light100: '#adadad',
  light200: '#b8b8b8',
  light300: '#c2c2c2',
  light400: '#cccccc',
  light500: '#d6d6d6',
  light600: '#e0e0e0',
  light700: '#ebebeb',
  light800: '#f5f5f5',
  light900: '#fff'
}

export const coreTheme = {
  colors,
  fontSizes: {
    h1: 27,
    h2: 20,
    h3: 17,
    h4: 13,
    body1: 15,
    body2: 14,
    body3: 13
  },
  space: {
    xxs: '6px',
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '15px',
    xl: '20px',
    xxl: '30px',
    number: {
      xxs: 6,
      xs: 8,
      sm: 10,
      md: 12,
      lg: 15,
      xl: 20,
      xxl: 30
    }
  },
  borderWidths: {
    sm: '1px'
  },
  radii: {
    md: 6
  },
  background: {
    behind: colors.light800,
    ahead: colors.light900
  },
  switch: {
    thumb: colors.light900
  }
}
