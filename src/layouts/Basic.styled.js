import { Platform, StatusBar } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Layout = styled.SafeAreaView(
  ({ theme }) =>
    css`
      flex: 1;
      background-color: ${theme.colors.light800};
      padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0};
    `
)
