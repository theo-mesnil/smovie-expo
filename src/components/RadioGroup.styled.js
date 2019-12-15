import styled, { css } from 'styled-components/native'

export const Radio = styled.TouchableOpacity(
  ({ selected, theme }) => css`
    background-color: ${theme.colors.light900};
    border: 2px solid ${selected ? theme.colors.primary500 : theme.colors.light500};
    width: 25px;
    height: 25px;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
  `
)

export const Checked = styled.View(
  ({ theme }) =>
    css`
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background-color: ${theme.colors.primary500};
    `
)
