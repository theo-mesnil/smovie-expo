import styled, { css } from 'styled-components/native'
import ModalNative from 'react-native-modal'

import { Box } from './Box'

export const Modal = styled(ModalNative)`
  justify-content: flex-end;
  margin: 0;
`

export const Content = styled(Box)(
  ({ maxHeight, theme, withPadding }) => css`
    background-color: ${theme.colors.light700};
    padding-bottom: 60;
    padding-top: ${theme.space.sm};
    border-top-left-radius: ${theme.radii.xl};
    border-top-right-radius: ${theme.radii.xl};
    max-height: ${maxHeight};
    ${withPadding
      ? css`
          padding-horizontal: ${theme.space.xl};
        `
      : css`
          padding-horizontal: ${theme.space.xs};
        `}
  `
)
