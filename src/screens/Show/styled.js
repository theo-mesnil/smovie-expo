import styled, { css } from 'styled-components/native'

export const Seasons = styled.View(
  ({ theme }) => css`
    width: 100%;
    padding-horizontal: ${theme.space.xl};
    padding-top: ${theme.space.md};
    padding-bottom: ${theme.space.xl};
    flex-direction: row;
  `
)
