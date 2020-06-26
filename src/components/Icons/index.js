import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { useTheme } from '../../contexts/theme'

export ArrowLeftIcon from './ArrowLeft'
export ArrowRightIcon from './ArrowRight'
export ChevronRightIcon from './ChevronRight'
export CloudDrizzleIcon from './CloudDrizzle'
export CloudIcon from './Cloud'
export CloudLightningIcon from './CloudLightning'
export CrossIcon from './Cross'
export ExternalLinkIcon from './ExternalLink'
export GithubIcon from './Github'
export HeartIcon from './Heart'
export MailIcon from './Mail'
export MenuIcon from './Menu'
export MoonIcon from './Moon'
export MovieIcon from './Movie'
export SearchIcon from './Search'
export SmartphoneIcon from './Smartphone'
export StarIcon from './Star'
export SunIcon from './Sun'
export TvIcon from './Tv'

const IconStyled = styled.View`
  ${space};
`

export function Icon({ color = 'dark900', icon: IconComponent, size, ...rest }) {
  const theme = useTheme()

  return <IconStyled as={IconComponent} color={theme.values.colors[color]} size={size} {...rest} />
}
