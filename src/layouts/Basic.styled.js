import { Platform, StatusBar } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Layout = styled.SafeAreaView(
  ({ theme }) =>
    css`
      flex: 1;
      background-color: ${theme.background.behind};
      ${Platform.OS === 'android' && `padding-top: ${StatusBar.currentHeight}`};
    `
)
