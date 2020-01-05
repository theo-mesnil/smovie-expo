import styled, { css } from 'styled-components/native'

import { SIZE_TABLET } from '../constants/screen'

export const centeredStyled = ({ theme, withMaxSize }) => css`
  padding-horizontal: ${theme.space.xl};
  width: ${withMaxSize ? SIZE_TABLET : '100%'};
  max-width: 100%;
  align-self: center;
`

export const Centered = styled.View`
  ${centeredStyled}
`
