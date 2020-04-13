import styled, { css } from 'styled-components/native'

export const Radio = styled.View(
  ({ selected, theme }) => css`
    background-color: ${theme.colors.light900};
    border: 2px solid ${selected ? theme.colors.primary500 : theme.colors.light500};
    width: 25;
    height: 25;
    border-radius: 13;
    align-items: center;
    justify-content: center;
  `
)

export const Checked = styled.View(
  ({ theme }) =>
    css`
      width: 12;
      height: 12;
      border-radius: ${theme.radii.md};
      background-color: ${theme.colors.primary500};
    `
)
