import styled, { css } from 'styled-components/native'

export const TitleWrapper = styled.View(
  ({ theme }) => css`
    margin-top: ${theme.space.xxs};
  `
)

export const Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.body1};
    font-family: 'bold';
  `
)

export const SubtitleWrapper = styled.View`
  margin-top: 2;
`

export const Subtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark100};
    font-size: ${theme.fontSizes.body2};
    font-family: 'regular';
  `
)
