import styled, { css } from 'styled-components/native'

export const App = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.light[900]};
    align-items: center;
    justify-content: center;
  `
)
