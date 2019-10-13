import styled, { css } from 'styled-components/native'

export const Text = styled.Text(
  ({ theme, weight }) => css`
    font-family: ${weight};
    color: ${theme.colors.dark[900]};
  `
)
