/* eslint-disable react/no-multi-comp */
import React from 'react'
import { ScrollView } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import { BasicLayout } from '../../layouts/Basic'
import { Centered } from '../../components/Centered'
import { Icon } from '../../components/Icon'
import { Item, List } from '../../components/List'
import { TitleScreen } from '../../components/TitleScreen'
import { Radio } from '../../components/RadioGroup'

export const More = ({ screenProps: { setThemeName, themeName } }) => {
  const setTheme = value => {
    setThemeName(value)
  }

  const openLink = async link => {
    await WebBrowser.openBrowserAsync(link)
  }

  function ThemeItem({ isLast, subtitle, theme, title }) {
    return (
      <Item isLast={isLast} onPress={() => setTheme(theme)}>
        <Item.Content>
          <Item.Title>{title}</Item.Title>
          <Item.Subtitle>{subtitle}</Item.Subtitle>
        </Item.Content>
        <Radio onPress={() => setTheme(theme)} selected={themeName === theme} />
      </Item>
    )
  }

  return (
    <BasicLayout>
      <ScrollView>
        <Centered withMaxSize>
          <TitleScreen>More</TitleScreen>
        </Centered>
        <List>
          <List.Title>Theme</List.Title>
          <ThemeItem subtitle="Get that whiteness out of my sight" theme="dark" title="Dark mode" />
          <ThemeItem subtitle="Turn on the light" theme="light" title="Light mode" />
          <ThemeItem
            isLast
            subtitle="Get theme from your device settings"
            theme="native"
            title="Native mode"
          />
        </List>
        <List>
          <List.Title>Codebase</List.Title>
          <Item onPress={() => openLink('https://www.expo.io')}>
            <Item.Content>
              <Item.Title>Expo</Item.Title>
              <Item.Subtitle>Platform for universal React applications</Item.Subtitle>
            </Item.Content>
            <Icon color="dark100" name="external-link" size={20} />
          </Item>
          <Item isLast onPress={() => openLink('https://www.themoviedb.org')}>
            <Item.Content>
              <Item.Title>The movie database</Item.Title>
              <Item.Subtitle>Community built movie and TV database</Item.Subtitle>
            </Item.Content>
            <Icon color="dark100" name="external-link" size={20} />
          </Item>
        </List>
      </ScrollView>
    </BasicLayout>
  )
}
