import styled, { css } from 'styled-components/native'
import { space } from 'styled-system'

export const List = styled.View(
  ({ theme }) => css`
    border-radius: ${theme.radii.md};
    background-color: ${theme.colors.ahead};
    padding-top: ${theme.space.lg};
    margin-horizontal: ${theme.space.sm};
    margin-vertical: ${theme.space.sm};
  `
)

List.Title = styled.Text(
  ({ theme }) => css`
    font-family: 'black';
    color: ${theme.colors.primary500};
    font-size: ${theme.fontSizes.h5};
    text-transform: uppercase;
    padding-horizontal: ${theme.space.lg};
  `
)

List.Item = styled.View(
  ({ isLast, theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: ${theme.space.lg};

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
    border-style: solid;
    border-color: ${theme.colors.border};

    ${space};
  `
)

List.Item.Content = styled.View`
  flex-direction: column;
  flex: 1;
`

List.Item.Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.body1};
    font-family: 'bold';
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
