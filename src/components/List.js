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
  ({ theme, withMaxSize = true }) => css`
    ${centeredStyled({ theme, withMaxSize })};
    font-family: 'black';
    color: ${theme.colors.primary500};
    font-size: ${theme.fontSizes.h4};
    text-transform: uppercase;
  `
)

export const Item = styled.TouchableOpacity(
  ({ isLast, theme, withMaxSize = true }) => css`
    ${centeredStyled({ theme, withMaxSize })};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${isLast
      ? css`${theme.space.xl} ${theme.space.xl} ${theme.space.xs}`
      : theme.space.xl};
    border-bottom-width: ${isLast ? 0 : theme.borderWidths.sm};
    border-color: ${theme.colors.light800};
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
    font-family: 'bold';
  `
)

Item.Subtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark100};
    font-size: ${theme.fontSizes.body2};
    font-family: 'regular';
    padding-top: 2;
  `
)
