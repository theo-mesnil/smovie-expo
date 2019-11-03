import styled, { css } from 'styled-components/native'

export const Button = styled.TouchableOpacity(
  ({ theme, variant }) => css`
    background-color: ${theme.colors[`${variant}500`]};
    padding: 10px 30px;
    border-radius: ${theme.radii.md};
  `
)

export const Content = styled.Text`
  color: #fff;
  font-family: 'bold';
`
