import styled, { css } from 'styled-components/native'

import { Text } from '../../components/Text'

export const MainInformation = styled.View`
  flex-direction: row;
  width: 100%;
  max-width: 600;
  margin-horizontal: 25;
  margin-bottom: 10;
`

export const Genre = styled(Text)(
  ({ theme }) => css`
    color: ${theme.colors.dark500};
    margin-top: 3;
  `
)
