import styled, { css } from 'styled-components/native'
import { TextInput as RNTextInput } from 'react-native'

import { isAndroid } from '../constants/screen'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.light500};
    padding-horizontal: ${theme.space.sm};
    border-radius: ${theme.radii.md};
    height: ${isAndroid ? 40 : 35};
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `}
`

export const TextInput = styled(RNTextInput)`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.colors.dark900};
  `}
`
