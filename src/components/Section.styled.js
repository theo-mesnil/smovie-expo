import styled, { css } from 'styled-components/native'

import { centeredStyled } from './Centered'
import { TouchableOpacity } from './TouchableOpacity'

export const Section = styled.View(
  ({ theme }) => css`
    margin-bottom: ${theme.space.xxl};
  `
)

export const TitleWithLink = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.View(
  ({ theme }) => css`
    ${centeredStyled};
    padding-bottom: ${theme.space.md};
  `
)

export const TitleContent = styled.Text(
  ({ theme }) => css`
    font-family: 'bold';
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.h2};
  `
)

export const Icon = styled.View(
  ({ theme }) => css`
    margin-left: ${theme.space.xs};
  `
)
