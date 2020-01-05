import styled, { css } from 'styled-components/native'
import { color, flexbox, layout, position, space, typography } from 'styled-system'

export const Text = styled.Text(
  ({ fontSize = 16, theme, weight }) => css`
    font-family: ${weight};
    font-size: ${fontSize};
    color: ${theme.colors.dark900};
    ${flexbox};
    ${layout};
    ${position};
    ${space};
    ${color};
    ${typography};
  `
)
