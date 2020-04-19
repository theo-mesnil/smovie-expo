import styled, { css } from 'styled-components/native'
import ModalNative from 'react-native-modal'
import { View } from 'react-native'

export const Modal = styled(ModalNative)`
  justify-content: flex-end;
  margin: 0;
`

export const Wrapper = styled(View)(
  ({ maxHeight, theme, withPadding }) => css`
    background-color: ${theme.colors.ahead};
    border-radius: ${theme.radii.xl};
    max-height: ${maxHeight};
    overflow: hidden;

    ${withPadding &&
    css`
      padding-horizontal: ${theme.space.xl};
      padding-vertical: ${theme.space.xl};
    `};
  `
)
