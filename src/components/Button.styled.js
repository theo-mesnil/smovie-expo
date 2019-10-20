import styled, { css } from 'styled-components/native'

export const Button = styled.TouchableOpacity(
  ({ theme, variant }) => css`
    background-color: ${theme.colors[variant]};
    padding: 10px 30px;
    border-radius: 10px;
  `
)

export const Content = styled.Text`
  color: #ffffff;
  font-family: 'bold';
`
