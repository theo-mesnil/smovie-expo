import styled, { css } from 'styled-components/native'
import { flexbox, layout, position, space, typography, variant } from 'styled-system'

import { Text } from './Text'

export const Button = styled.View(
  // eslint-disable-next-line no-unused-vars
  ({ theme, variantSize }) => css`
  ${variant({
    variants: {
      primary: {
        bg: theme.colors.primary500
      },
      secondary: {
        bg: theme.colors.secondary500
      },
      tertiary: {
        bg: theme.colors.light500
      }
    }
  })}
  ${variant({
    prop: 'variantSize',
    variants: {
      sm: {
        'padding-vertical': theme.space.xxs,
        'padding-horizontal': theme.space.xs
      },
      md: {
        'padding-vertical': theme.space.sm,
        'padding-horizontal': theme.space.md
      }
    }
  })}
    border-radius: ${theme.radii.md};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    ${flexbox};
    ${layout};
    ${position};
    ${space};
    ${typography};
  `
)

export const Content = styled(Text)(
  // eslint-disable-next-line no-unused-vars
  ({ color, theme }) => css`
    ${variant({
      variants: {
        primary: {
          color: theme.colors.white
        },
        secondary: {
          color: theme.colors.white
        },
        tertiary: {
          color: theme.colors.dark900
        }
      }
    })}
    ${variant({
      prop: 'variantSize',
      variants: {
        sm: {
          'font-size': 13
        },
        md: {
          'font-size': 16
        }
      }
    })}
    font-family: 'bold';
  `
)
