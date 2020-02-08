import React from 'react'

import { BasicLayout } from '../../layouts'
import { Centered, TitleScreen } from '../../components'

export function Movies() {
  return (
    <BasicLayout>
      <Centered>
        <TitleScreen>Movies</TitleScreen>
      </Centered>
    </BasicLayout>
  )
}
