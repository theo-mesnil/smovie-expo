import styled, { css } from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import { layout } from 'styled-system'

export const Icon = styled(Feather)(
  ({ color, theme }) => css`
    color: ${theme.colors[color] || color};
    ${layout};
  `
)
