import React from 'react'

import { BasicLayout } from '../../layouts/Basic'
import { TitleScreen } from '../../components/TitleScreen'
import { Centered } from '../../components/Centered'

export const Home = () => (
  <BasicLayout>
    <Centered>
      <TitleScreen>Home</TitleScreen>
    </Centered>
  </BasicLayout>
)
