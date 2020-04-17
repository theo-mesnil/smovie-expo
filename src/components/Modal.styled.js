import styled, { css } from 'styled-components/native'
import ModalNative from 'react-native-modal'
import { View } from 'react-native'

export const Modal = styled(ModalNative)(
  ({ theme }) => css`
    justify-content: flex-end;
    margin: 0;
    padding-bottom: ${theme.space.md};
    padding-right: ${theme.space.md};
    padding-left: ${theme.space.md};
  `
)

export const Wrapper = styled(View)(
  ({ maxHeight, theme, withPadding }) => css`
    background-color: ${theme.colors.light700};
    border-radius: ${theme.radii.xl};
    max-height: ${maxHeight};
    max-width: 600;
    overflow: hidden;

    ${withPadding &&
    css`
      padding-horizontal: ${theme.space.xl};
      padding-vertical: ${theme.space.xl};
    `}
  `
)
