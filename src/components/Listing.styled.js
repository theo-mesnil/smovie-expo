import styled, { css } from 'styled-components/native'

import { isTablet, SIZE_TABLET, windowWidth } from '../constants/screen'

export const Item = styled.View(
  ({ isFirst, numberOfColumns = 2, numberOfColumnsTablet = 3, theme }) => css`
    width: ${windowWidth / numberOfColumns - theme.space.number.md * (numberOfColumns + 1)};
    margin-left: ${theme.space.md};
    ${isFirst && `margin-left: 0`}
    ${isTablet &&
      css`
        width: ${SIZE_TABLET / numberOfColumnsTablet -
          theme.space.number.md * (numberOfColumnsTablet + 1)};
      `}
  `
)
