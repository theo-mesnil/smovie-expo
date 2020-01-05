import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from './TouchableOpacity'

export const Button = styled(TouchableOpacity)(
  ({ theme, variant }) => css`
    background-color: ${theme.colors[`${variant}500`]};
    padding-vertical: ${theme.space.sm};
    padding-horizontal: ${theme.space.xxl};
    border-radius: ${theme.radii.md};
  `
)

export const Content = styled.Text`
  color: #fff;
  font-family: 'bold';
`
