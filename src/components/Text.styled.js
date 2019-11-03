import styled, { css } from 'styled-components/native'

export const Text = styled.Text(
  ({ theme, weight }) => css`
    font-family: ${weight};
    font-size: 20;
    color: ${theme.colors.dark900};
    font-family: 'regular';
  `
)
