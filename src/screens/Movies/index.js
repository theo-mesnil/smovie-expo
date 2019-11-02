import React from 'react'

import { BasicLayout } from '../../layouts/Basic'
import { Centered } from '../../components/Centered'
import { TitleScreen } from '../../components/TitleScreen'

export const Movies = () => (
  <BasicLayout>
    <Centered>
      <TitleScreen>Movies</TitleScreen>
    </Centered>
  </BasicLayout>
)
