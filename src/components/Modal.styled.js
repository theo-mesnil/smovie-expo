import styled, { css } from 'styled-components/native'
import ModalNative from 'react-native-modal'

import { Box } from './Box'

export const Modal = styled(ModalNative)`
  justify-content: flex-end;
  margin: 0;
`

export const Content = styled(Box)(
  ({ maxHeight, theme }) => css`
    background-color: ${theme.colors.light700};
    padding-horizontal: ${theme.space.xl};
    padding-bottom: 60;
    padding-top: ${theme.space.sm};
    border-top-left-radius: 20;
    border-top-right-radius: 20;
    max-height: ${maxHeight};
  `
)
