import styled, { css } from 'styled-components/native'

export const Episode = styled.View(
  ({ theme }) => css`
    background-color: ${theme.colors.ahead};
    padding-vertical: ${theme.space.sm};
    padding-horizontal: ${theme.space.sm};
    border-radius: ${theme.radii.md};
    margin-bottom: ${theme.space.xl};
  `
)
