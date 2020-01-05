import styled, { css } from 'styled-components/native'

export const Layout = styled.View(
  ({ theme }) =>
    css`
      flex: 1;
      background-color: ${theme.background.behind};
      padding-bottom: ${theme.space.xxl};
    `
)
