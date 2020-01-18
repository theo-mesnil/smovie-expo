import styled, { css } from 'styled-components/native'
import { space } from 'styled-system'

export const TitleScreen = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.dark900};
    font-family: 'bold';
    font-size: ${theme.fontSizes.h1};
    margin-vertical: ${theme.space.xl};
    ${space};
  `
)
