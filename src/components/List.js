import styled, { css } from 'styled-components/native'

export const List = styled.View(
  ({ theme }) => css`
    border-radius: ${theme.radii.md};
    background-color: ${theme.colors.ahead};
    padding-top: ${theme.space.lg};
    padding-horizontal: ${theme.space.lg};
    margin-horizontal: ${theme.space.sm};
    margin-vertical: ${theme.space.sm};
  `
)

List.Title = styled.Text(
  ({ theme }) => css`
    font-family: 'black';
    color: ${theme.colors.primary500};
    font-size: ${theme.fontSizes.h4};
    text-transform: uppercase;
  `
)

List.Item = styled.View(
  ({ isLast, theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${
      isLast
        ? css`
            padding-vertical: ${theme.space.lg};
          `
        : css`
            padding-vertical: ${theme.space.lg};
          `
    }
    border-bottom-width: ${isLast ? 0 : theme.borderWidths.sm};
    border-color: ${theme.colors.light500};
  `
)

List.Item.Content = styled.View`
  flex-direction: column;
  width: auto;
`

List.Item.Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.body1};
    font-family: 'bold';
    text-transform: capitalize;
  `
)

List.Item.Subtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark100};
    font-size: ${theme.fontSizes.body2};
    font-family: 'regular';
    padding-top: 2;
  `
)
