import styled, { css } from 'styled-components/native'

export const Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-size: ${theme.fontSizes.body1};
    font-family: 'bold';
    margin-top: ${theme.space.xxs};
  `
)

export const Subtitle = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark100};
    font-size: ${theme.fontSizes.body2};
    font-family: 'regular';
    margin-top: 2;
  `
)
