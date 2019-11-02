import styled, { css } from 'styled-components/native'

import { centeredStyled } from './Centered'

export const List = styled.View(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.background.ahead};
    padding: ${theme.space.xl} 0 ${theme.space.sm};
    margin-bottom: ${theme.space.sm};
  `
)

List.Title = styled.Text(
  ({ theme }) => css`
    ${centeredStyled}
    font-family: 'bold';
    color: ${theme.colors.primary500};
    font-size: ${theme.fontSizes.h4};
    text-transform: uppercase;
  `
)

export const Item = styled.TouchableOpacity(
  ({ isLast, theme }) => css`
    ${centeredStyled};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${isLast
      ? `${theme.space.xl} ${theme.space.xl} ${theme.space.xs}`
      : `${theme.space.xl}`};
    border-bottom-width: ${isLast ? 0 : theme.borderWidths.sm};
    border-color: ${theme.colors.light700};
  `
)

Item.Content = styled.View`
  flex-direction: column;
  width: auto;
`

Item.Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.body1};
  `
)

Item.Subtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.light100};
    font-size: ${theme.fontSizes.body2};
    padding-top: 2;
  `
)
