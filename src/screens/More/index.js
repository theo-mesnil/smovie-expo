import React from 'react'

import { BasicLayout } from '../../layouts/Basic'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'

export const More = ({ screenProps: { setThemeName, themeName } }) => (
  <BasicLayout>
    <Text weight="black">More</Text>
    <Button onPress={() => setThemeName(themeName === 'dark' ? '' : 'dark')}>Change theme</Button>
  </BasicLayout>
)
