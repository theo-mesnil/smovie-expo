import styled, { css } from 'styled-components/native'

import { SIZE_TABLET } from '../constants/screen'

export const centeredStyled = ({ theme }) => css`
  padding: 0 ${theme.space.xl};
  width: ${SIZE_TABLET};
  max-width: 100%;
  align-self: center;
`

export const Centered = styled.View`
  ${centeredStyled}
`
