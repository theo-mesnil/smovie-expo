import styled, { css } from 'styled-components/native'

export const TitleScreen = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-family: 'bold';
    font-size: ${theme.fontSizes.h1};
    margin: ${theme.space.xl} 0;
  `
)
