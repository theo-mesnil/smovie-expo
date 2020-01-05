import styled, { css } from 'styled-components/native'
import { flexbox, layout, position, space, typography } from 'styled-system'

import { TouchableOpacity } from './TouchableOpacity'
import { Text } from './Text'

function ButtonSize({ theme, variantSize }) {
  if (variantSize === 'sm') {
    return css`
      padding-vertical: ${theme.space.xxs};
      padding-horizontal: ${theme.space.xs};
    `
  } else {
    return css`
      padding-vertical: ${theme.space.sm};
      padding-horizontal: ${theme.space.md};
    `
  }
}

function ContentSize({ variantSize }) {
  if (variantSize === 'sm') {
    return css`
      font-size: 13;
    `
  } else {
    return css`
      font-size: 16;
    `
  }
}

export const Button = styled(TouchableOpacity)(
  // eslint-disable-next-line no-unused-vars
  ({ theme, variant, variantSize }) => css`
    background-color: ${theme.colors[`${variant}`]};
    border-radius: ${theme.radii.md};
    ${ButtonSize};
    ${flexbox};
    ${layout};
    ${position};
    ${space};
    ${typography};
  `
)

export const Content = styled(Text)(
  // eslint-disable-next-line no-unused-vars
  ({ color, theme, variantSize }) => css`
    color: ${color || theme.colors.dark900};
    font-family: 'bold';
    ${ContentSize}
  `
)
